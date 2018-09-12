import { scaleLinear } from 'd3'

export const createLinearScale = (data, key, range) =>
  scaleLinear()
    .domain([
      Math.min(...data.map(obj => obj[key])) / 1.01,
      Math.max(...data.map(obj => obj[key])) * 1.01
    ])
    .range(range)

export const updateScale = (scale, data, key) =>
  scale.domain([
    Math.min(...data.map(obj => obj[key])) / 1.01,
    Math.max(...data.map(obj => obj[key])) * 1.01
  ])
