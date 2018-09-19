import { makeSelector } from 'utils/selectors'

const gaps = state => state.data.gaps
const concepts = state => state.data.concepts

export const getGaps = makeSelector(gaps)
export const getConcepts = makeSelector(concepts)
