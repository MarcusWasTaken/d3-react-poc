import { scaleLinear } from 'd3'

export function createLinearScale(data, key, range) {
  return scaleLinear()
    .domain([
      Math.min(...data.map(obj => obj[key])) / 1.01,
      Math.max(...data.map(obj => obj[key])) * 1.01
    ])
    .range(range)
}

export function updateScale(scale, data, key, range) {
  return scale
    .domain([
      Math.min(...data.map(obj => obj[key])) / 1.01,
      Math.max(...data.map(obj => obj[key])) * 1.01
    ])
    .range(range)
}
