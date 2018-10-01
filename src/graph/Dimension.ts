import * as d3 from 'd3'
import { computeDomain, createD3Scale } from './DimensionHelper'

export default class Dimension {
  scale: any
  dimensionValue: string

  constructor(
    private range: number[],
    private nodes: any,
    // private domValues: any,
    private selectedValue: string,
    private name: string
  ) {

    // d3.selectAll(domValues.id).html("");

    // domValues.dimensions.forEach(dimenson => {
    //   if (dimenson === domValues.selected) {
    //     d3.selectAll(domValues.id)
    //       .append('option')
    //       .attr('value', dimenson)
    //       .attr('selected', 'selected')
    //       .text(dimenson)
    //   } else {
    //     d3.selectAll(domValues.id)
    //       .append('option')
    //       .attr('value', dimenson)
    //       .text(dimenson)
    //   }
    // })
  }

  public update(selectedValue, nodes) {
    this.selectedValue = selectedValue;
    this.nodes = nodes
  }

  public updateAxis() {
    // @ts-ignore
    // this.dimensionValue = d3.selectAll(this.domValues.id).node().value
    // const xValueDomain = computeDomain(this.nodes, this.dimensionValue)
    const xValueDomain = computeDomain(this.nodes, this.selectedValue)
    this.scale = createD3Scale(this.nodes[0], this.selectedValue)
    this.scale.domain(xValueDomain)
    if (typeof this.scale.domain(xValueDomain).nice != 'undefined') {
      this.scale.domain(xValueDomain).nice()
    }
    this.scale.range(this.range)
  }

  public getScale() {
    return this.scale
  }

  public getTypeOfValue() {
    const value = this.selectedValue
    if (value == 'dueDate' || value == 'changeDate' || value == "creationDate" || value == "revisitDate") {
      return 'date'
    } else if (value == 'value') {
      return 'value'
    }
    return value
  }

  /**
   * returns the coordinate value for given dimension value, e.g Strategy -> 123 (x value in graph)
   *
   * @param value
   */
  public getCoordinateValue(value) {
    if (!value && value !== 0) {
      // return value
      return undefined
    }
    return this.scale(value)
  }

  /**
   * return the current selcted value from dropdown, like Viewpoint or Due Date
   */
  public getValue(): string {
    return this.selectedValue
  }



  public getAxis() {
    function checkIfDate(value) {
      if (value == 'dueDate' || value == 'changeDate' || value == "creationDate" || value == "revisitDate") {
        return true
      }
    }
    function dateFormat() {
      return d3.timeFormat("%b, %Y")
    }

    switch (this.name) {
      case 'xAxis':
        if (checkIfDate(this.getValue())) {
          return d3.axisBottom(this.getScale()).tickPadding(8).tickFormat(dateFormat())
        }
        return d3.axisBottom(this.getScale()).tickPadding(8)
      case 'yAxis':
        if (checkIfDate(this.getValue())) {
          return d3.axisLeft(this.getScale()).tickFormat(dateFormat())
        }
        return d3.axisLeft(this.getScale())
      case 'yRightAxis':
        if (checkIfDate(this.getValue())) {
          return d3.axisRight(this.getScale()).tickFormat(dateFormat())
        }
        return d3.axisRight(this.getScale())
      default:
    }
  }
}



