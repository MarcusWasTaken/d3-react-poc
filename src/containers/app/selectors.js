import { makeSelector } from 'utils/selectors'

const gaps = state => state.app.data.gaps
const concepts = state => state.app.data.concepts
const selectedGaps = state => state.app.selected.gaps
const selectedConcepts = state => state.app.selected.concepts

export const getGaps = makeSelector(gaps)
export const getConcepts = makeSelector(concepts)
export const getSelectedGaps = makeSelector(selectedGaps)
export const getSelectedConcepts = makeSelector(selectedConcepts)
