import * as d3 from 'd3'
import { computeDomain, createD3Scale } from './DimensionHelper'

export default class Dimension {
  scale: any
  dimensionValue: string

  constructor(
    private range: number[],
    private nodes: any,
    // private domValues: any,
    private selectedValue: string
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

  public updateSelectedValue(value) {
    this.selectedValue = value;
  }

  public updateAxis() {
    // @ts-ignore
    // this.dimensionValue = d3.selectAll(this.domValues.id).node().value
    // const xValueDomain = computeDomain(this.nodes, this.dimensionValue)
    const xValueDomain = computeDomain(this.nodes, this.selectedValue)
    this.scale = createD3Scale(this.nodes[0], this.selectedValue)
    this.scale.domain(xValueDomain)
    this.scale.range(this.range)
  }

  public getScale() {
    return this.scale
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
}
