export default data =>
  !data.gaps.length &&
  !data.concepts.length &&
  !data.gapRelations.length &&
  !data.gapConceptRelations.length
    ? false
    : true
