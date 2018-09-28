import * as d3 from 'd3'
import 'd3-selection-multi'
import { Selection, brush } from 'd3'
import { GapRelation } from 'models/gap-relation/GapRelation'
import { GapConceptRelation } from 'models/gap-concept-relation/GapConceptRelation'
import { Concept } from 'models/concept/Concept'
import { Gap } from 'models/gap/Gap'
import Dimension from './Dimension'
import { getCurrentDimensionValue, getSelectedNodeIds } from './DimensionHelper'
// import { RenderInfoDisplay } from './RenderInfoDisplay'
import { GraphDataStore } from '../models/GraphDataStore'
import { GraphDataHolder } from './GraphDataHolder'
import {
  getCoordinatesFunction,
  getTransformCoordinates,
  getGapRelationStartCoordinatesFunction,
  getGapRelationEndCoordinatesFunction,
  getGapConceptRelationStartCoordinatesFunction,
  getGapConceptRelationEndCoordinatesFunction,
  outsideGapXCord,
  outsideConceptXCord,
  outsideCoordinates
} from './CoordinateHelper'

export interface GraphData {
  gaps: Gap[]
  concepts: Concept[]
  gapRelations: GapRelation[]
  gapConceptRelations: GapConceptRelation[]
}

export default class Graph {
  data: GraphData = undefined // Nodes and relations
  xAxis = undefined // Current d3 x-axis
  yAxis = undefined // Current d3 y-axis
  yAxisRight = undefined // Current d3 y-axis - right

  // Moved
  selectedGaps: Gap[] = []
  selectedConcepts: Concept[] = []
  diagram: Selection<d3.BaseType, {}, HTMLElement, any>
  xAxisG: Selection<d3.BaseType, {}, HTMLElement, any>
  yAxisG: Selection<d3.BaseType, {}, HTMLElement, any>
  yAxisRightG: Selection<d3.BaseType, {}, HTMLElement, any>
  brushElem: any
  brush
  diagramDimensions

  xDimension: Dimension
  yDimension: Dimension
  yRightDimension: Dimension

  public create(node, outerWidth, borderHeight, data, selectedDimensions) {
    const svg = d3.select(node)
    const margin = { top: 30, right: 100, bottom: 110, left: 100 }
    const width = outerWidth - margin.left - margin.right
    const height = borderHeight - margin.top - margin.bottom
    const g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    this.diagramDimensions = {
      left: 15,
      top: 15,
      right: width - 15,
      bottom: height - 15
    }

    this.diagram = g.append('g')
    this.xAxisG = g
      .append('g')
      .attr(
        'transform',
        'translate(' + 0 + ',' + this.diagramDimensions.bottom + ')'
      )
      .attr('class', 'axis')

    this.yAxisG = g
      .append('g')
      .attr(
        'transform',
        'translate(' + this.diagramDimensions.left + ',' + 0 + ')'
      )
      .attr('class', 'axis')

    this.yAxisRightG = g
      .append('g')
      .attr(
        'transform',
        'translate(' + this.diagramDimensions.right + ',' + 0 + ')'
      )
      .attr('class', 'axis axisRight')

    const brush = d3
      .brush()
      .on('start brush', this.brushed.bind(this))
      .on('end', this.brushEnd.bind(this))
    this.brushElem = g.append('g').call(brush)

    // setup listeners
    // document
    //   .getElementById('xAxisSelect')
    //   .addEventListener('change', this.selectDimension.bind(this))
    // document
    //   .getElementById('yAxisSelect')
    //   .addEventListener('change', this.selectDimension.bind(this))
    // document
    //   .getElementById('yAxisRightSelect')
    //   .addEventListener('change', this.selectDimension.bind(this))
    this.init(data, selectedDimensions)
  }

  public init(data, selectedDimensions) {
    GraphDataHolder.updateData(data, selectedDimensions)

    // let domValues = {
    //   id: '#xAxisSelect',
    //   dimensions: ['Due date', 'Owner', 'Viewpoint'],
    //   selected: 'Due date'
    // }
    this.xDimension = new Dimension(
      [this.diagramDimensions.left, this.diagramDimensions.right],
      GraphDataHolder.getNodes(),
      selectedDimensions.xDimension
    )

    // domValues = {
    //   id: '#yAxisSelect',
    //   dimensions: ['Viewpoint', 'Due date', 'Value', 'Owner'],
    //   selected: 'Viewpoint'
    // }
    this.yDimension = new Dimension(
      [this.diagramDimensions.bottom, this.diagramDimensions.top],
      GraphDataHolder.getGapNodes(),
      selectedDimensions.yGapDimension
    )

    // domValues = {
    //   id: '#yAxisRightSelect',
    //   dimensions: ['Viewpoint', 'Due date', 'Value'],
    //   selected: 'Due date'
    // }
    this.yRightDimension = new Dimension(
      [this.diagramDimensions.bottom, this.diagramDimensions.top],
      GraphDataHolder.getConceptNodes(),
      selectedDimensions.yConceptDimension
    )
    this.UpdateGraph()
  }

  // public selectDimension() {
  //   this.xDimension.updateAxis()
  //   this.yDimension.updateAxis()
  //   this.yRightDimension.updateAxis()

  //   this.xAxis = d3.axisBottom(this.xDimension.getScale()).tickSize(10).tickPadding(5)
  //   this.yAxis = d3.axisLeft(this.yDimension.getScale())
  //   this.yAxisRight = d3.axisRight(this.yRightDimension.getScale())

  //   this.redraw()
  // }

  public update(data, selectedDimensions) {
    GraphDataHolder.updateData(data, selectedDimensions)
    this.xDimension.updateSelectedValue(GraphDataHolder.xAxis)
    this.yDimension.updateSelectedValue(GraphDataHolder.yAxis)
    this.yRightDimension.updateSelectedValue(GraphDataHolder.yAxisRight)
    this.UpdateGraph()
  }

  public UpdateGraph() {
    this.xDimension.updateAxis()
    this.yDimension.updateAxis()
    this.yRightDimension.updateAxis()

    this.xAxis = d3
      .axisBottom(this.xDimension.getScale())
      .tickSize(10)
      .tickPadding(5)
    this.yAxis = d3.axisLeft(this.yDimension.getScale())
    this.yAxisRight = d3.axisRight(this.yRightDimension.getScale())

    this.redraw()
  }

  private updateText() {
    // const container = d3.select('.diagram_text_container')
    // container.html(null)
    // RenderInfoDisplay(
    //   this.selectedGaps,
    //   this.selectedConcepts,
    //   GraphDataHolder.getGapRelations(),
    //   GraphDataHolder.getGapConceptRelations()
    // )
  }

  private brushed() {
    if (d3.event.sourceEvent.type === 'end') return
    this.selectedGaps = getSelectedNodeIds(
      GraphDataHolder.getGapNodes(),
      this.xDimension,
      this.yDimension,
      'gap'
    )
    this.selectedConcepts = getSelectedNodeIds(
      GraphDataHolder.getConceptNodes(),
      this.xDimension,
      this.yRightDimension,
      'concept'
    )
    this.updateText()
    this.redraw()
  }

  private brushEnd() {
    if (d3.event.sourceEvent.type === 'brush') return
    if (d3.event.sourceEvent.type === 'end') return

    if (!d3.event.selection) {
      this.selectedGaps = []

      const px = d3.mouse(this.brushElem.node())[0]
      const py = d3.mouse(this.brushElem.node())[1]

      const InNodeArea = function(cx, cy) {
        const dx = cx - px
        const dy = cy - py
        if (Math.sqrt(dx * dx + dy * dy) <= 10) {
          return true
        }
      }

      GraphDataHolder.getGapNodes().forEach((gap: Gap) => {
        const cx = this.xDimension.getCoordinateValue(
          getCurrentDimensionValue(gap, this.xDimension.getValue())
        )
        const cy = this.yDimension.getCoordinateValue(
          getCurrentDimensionValue(gap, this.yDimension.getValue())
        )
        if (InNodeArea(cx, cy)) {
          this.selectedGaps.push(gap)
        }
      })
      GraphDataHolder.getConceptNodes().forEach((concept: Concept) => {
        const cx = this.xDimension.getCoordinateValue(
          getCurrentDimensionValue(concept, this.xDimension.getValue())
        )
        const cy = this.yRightDimension.getCoordinateValue(
          getCurrentDimensionValue(concept, this.yRightDimension.getValue())
        )
        if (InNodeArea(cx, cy)) {
          this.selectedConcepts.push(concept)
        }
      })
      outsideCoordinates.forEach((node: any) => {
        if (GraphDataHolder.getGap(node.id)) {
          const cx = node.xCord
          const cy = node.yCord
          if (InNodeArea(cx, cy)) {
            this.selectedGaps.push(GraphDataHolder.getGap(node.id))
          }
        } else if (GraphDataHolder.getConcept(node.id)) {
          const cx = node.xCord
          const cy = node.yCord
          if (InNodeArea(cx, cy)) {
            this.selectedConcepts.push(GraphDataHolder.getConcept(node.id))
          }
        }
      })
    }

    d3.select(this.brushElem.node()).call(d3.event.target.move, null)
    this.redraw()
    this.updateText()
  }

  private redraw() {
    this.xAxisG.call(this.xAxis)
    this.yAxisG.call(this.yAxis)
    this.yAxisRightG.call(this.yAxisRight)

    outsideGapXCord.reset()
    outsideConceptXCord.reset()

    const gaps = this.diagram
      .selectAll('.gap')
      .data(GraphDataHolder.getGapNodes())
    gaps.exit().remove()
    gaps
      .enter()
      .append('circle')
      .merge(gaps)
      .transition()
      .duration(1250)
      .attrs(getCoordinatesFunction(this))
      .attr('r', (gap: Gap) => {
        return 10
      })
      .style('stroke-dasharray', function(gap: Gap) {
        if (CalculateMaturity(gap) < 1) {
          return '2,2'
        }
      })
      .attr('class', (gap: Gap) => {
        if (this.selectedGaps.indexOf(gap) != -1) {
          return 'gap gap-selected'
        } else {
          return 'gap'
        }
      })

    const concepts = this.diagram
      .selectAll('.concept')
      .data(GraphDataHolder.getConceptNodes())
    concepts.exit().remove()
    concepts
      .enter()
      .append('path')
      .merge(concepts)
      .transition()
      .duration(1250)
      .attr(
        'd',
        d3
          .symbol()
          .size(150)
          .type(d3.symbolTriangle)
      )
      .attr('transform', getTransformCoordinates(this))
      .style('stroke-dasharray', '2,2')
      .attr('class', (concept: Concept) => {
        if (this.selectedConcepts.indexOf(concept) != -1) {
          return 'concept concept-selected'
        } else {
          return 'concept'
        }
      })

    const gapRelations = this.diagram
      .selectAll('.gap-relation')
      .data(GraphDataHolder.getGapRelations())
    gapRelations.exit().remove()
    gapRelations
      .enter()
      .append('line')
      .merge(gapRelations)
      .attr('pointer-events', 'none')
      .transition()
      .duration(1250)
      .attrs(getGapRelationStartCoordinatesFunction(this))
      .attrs(getGapRelationEndCoordinatesFunction(this))
      .attr('class', (relation: GapRelation) => {
        return 'gap-relation'
      })

    const gapConceptRelations = this.diagram
      .selectAll('.gap-concept-relation')
      .data(GraphDataHolder.getGapConceptRelations())
    gapConceptRelations.exit().remove()
    gapConceptRelations
      .enter()
      .append('line')
      .merge(gapConceptRelations)
      .attr('pointer-events', 'none')
      .transition()
      .duration(1250)
      .attrs(getGapConceptRelationStartCoordinatesFunction(this))
      .attrs(getGapConceptRelationEndCoordinatesFunction(this))
      .attr('class', relation => {
        return 'gap-concept-relation'
      })

    this.diagram.selectAll('text').remove()
    if (outsideCoordinates.length) {
      this.diagram
        .append('text')
        .attr('x', this.diagramDimensions.left - 100)
        .attr('y', this.diagramDimensions.bottom + 50)
        .text('Nodes without')
        .attr('font-family', 'sans-serif')
        .attr('font-size', '12px')
        .attr('fill', '#14406C')
        .attr('font-family', 'Montserrat')
      this.diagram
        .append('text')
        .attr('x', this.diagramDimensions.left - 100)
        .attr('y', this.diagramDimensions.bottom + 65)
        .text(' values:')
        .attr('font-family', 'sans-serif')
        .attr('font-size', '12px')
        .attr('fill', '#14406C')
    }
  }
}

function CalculateMaturity(node) {
  var numberOfMissingValues = 0
  var numberOfProps = 0

  function innerCalc(node) {
    Object.keys(node).forEach(function(key, index) {
      let value = node[key]
      if (typeof value == 'object') {
        if (Array.isArray(value)) {
          if (key != 'illustrations' && key != 'links') {
            for (let i = 0; i < value.length; i++) {
              const element = value[i]
              if (typeof element == 'object') {
                innerCalc(element)
              } else if (typeof element !== 'function') {
                numberOfProps++
                if (!element && element !== 0) {
                  numberOfMissingValues++
                }
              }
            }
          }
        } else {
          innerCalc(value)
        }
      } else if (typeof value !== 'function') {
        numberOfProps++
        if (!value && value !== 0) {
          numberOfMissingValues++
        }
      }
    })
    return (numberOfProps - numberOfMissingValues) / numberOfProps
  }
  return innerCalc(node)
}
