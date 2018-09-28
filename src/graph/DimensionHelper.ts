import * as d3 from 'd3'
import moment from 'moment'
import Dimension from './Dimension'
import { Gap } from 'models/gap/Gap'
import { Concept } from 'models/concept/Concept'
import { GraphDataStore } from '../models/GraphDataStore'
import { outsideCoordinates } from './CoordinateHelper'
import { State } from 'models/GraphObject'
import { GraphDataHolder } from './GraphDataHolder'
var graphData = require('./dimensions.json')

export function createD3Scale(element, dimensionDisplayName: string) {
  const value = getCurrentDimensionValue(element, dimensionDisplayName)
  if (value instanceof Date) {
    return d3.scaleTime()
  }
  if (typeof value === 'number') {
    return d3.scaleLinear()
  }
  return d3.scalePoint()
}

export function getCurrentDimensionValue(
  state: State,
  dimensionDisplayName: string
) {
  const value = state.getValue(dimensionDisplayName)
  // const value = state.getValue(getDimensionId(dimensionDisplayName))
  if (isDate(value)) {
    return moment(value).toDate()
  }
  return value
}

export function isDate(value: any): boolean {
  return typeof value === 'string' && !isNaN(Date.parse(value))
}

/**
 * Converts a display name to id, for example Due Date will become dueDate.
 *
 * @param dimensionDisplayName
 */
export function getDimensionId(dimensionDisplayName): string {
  const words = dimensionDisplayName.split(' ')
  const camelCase = words
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join('')
  const lowerFirstLetter =
    camelCase.charAt(0).toLowerCase() + camelCase.substring(1)
  return lowerFirstLetter
}

export function computeDomain(nodes, dimensionDisplayName: string): any[] {
  //Check if it exist in dimensions.json and use it
  // const predefinedDimension = graphData[getDimensionId(dimensionDisplayName)]
  const predefinedDimension = graphData[dimensionDisplayName]
  if (typeof predefinedDimension !== 'undefined') {
    return predefinedDimension
  }
  const values = []
  nodes.forEach(node => {
    //Check here to see if node has current value??
    if (getCurrentDimensionValue(node, dimensionDisplayName)) {
      values.push(getCurrentDimensionValue(node, dimensionDisplayName))
    }
  })
  //Check if values contain dates, if it does return min and max date
  if (values.length > 0 && moment(values[0]).isValid()) {
    const moments = values.map(d => moment(d))
    const maxDate = moment.max(moments)
    const minDate = moment.min(moments)
    return [minDate.toDate(), maxDate.toDate()]
  }
  //Check if values contain numbers, if it does, return min and max
  if (
    values.length > 0 &&
    values.find(value => typeof value === 'number') !== undefined
  ) {
    return [Math.min(...values), Math.max(...values)]
  }
  //othervise return list of all items
  return values
}

export function getSelectedNodeIds(
  nodes: State[],
  xDimension: Dimension,
  yDimension: Dimension,
  type: string
): any[] {
  const selectedNodes = []

  const x0 = d3.event.selection[0][0]
  const y0 = d3.event.selection[0][1]
  const x1 = d3.event.selection[1][0]
  const y1 = d3.event.selection[1][1]

  nodes.forEach(node => {
    const cx = xDimension.getCoordinateValue(
      getCurrentDimensionValue(node, xDimension.getValue())
    )
    const cy = yDimension.getCoordinateValue(
      getCurrentDimensionValue(node, yDimension.getValue())
    )
    if (cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1) {
      selectedNodes.push(node)
    }
  })

  outsideCoordinates.forEach(node => {
    const cx = node.xCord
    const cy = node.yCord
    if (cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1) {
      if (!selectedNodes.find(n => n.id == node.id)) {
        if (type == 'gap' && GraphDataHolder.getGap(node.id)) {
          selectedNodes.push(GraphDataHolder.getGap(node.id))
        } else if (type == 'concept' && GraphDataHolder.getConcept(node.id)) {
          selectedNodes.push(GraphDataHolder.getConcept(node.id))
        }
      }
    }
  })
  return selectedNodes
}
