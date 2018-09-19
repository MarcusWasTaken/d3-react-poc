import { makeSelector } from 'utils/selectors'

const gaps = state => state.data.gaps

export const getGaps = makeSelector(gaps)
