import { makeSelector } from 'utils/selectors'

const data = state => state.app.data
const gaps = state => state.app.data.gaps
const concepts = state => state.app.data.concepts
const gapRelations = state => state.app.data.gapRelations
const gapConceptRelations = state => state.app.data.gapConceptRelations
const selectedGaps = state => state.app.selected.gaps
const selectedConcepts = state => state.app.selected.concepts

export const getData = makeSelector(data)
export const getGaps = makeSelector(gaps)
export const getConcepts = makeSelector(concepts)
export const getGapRelations = makeSelector(gapRelations)
export const getGapConceptRelations = makeSelector(gapConceptRelations)
export const getSelectedGaps = makeSelector(selectedGaps)
export const getSelectedConcepts = makeSelector(selectedConcepts)
