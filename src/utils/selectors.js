import { createSelector } from 'reselect'

export const makeSelector = selector =>
  createSelector([selector], selector => selector)
