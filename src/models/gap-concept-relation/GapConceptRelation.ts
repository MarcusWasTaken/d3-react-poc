export interface GapConceptRelation {
  id: number
  creationDate: string
  owner: string
  createdBy: string
  changedBy: string
  changeDate: string
  revisitDate: string
  dueDate: string
  links: [
    {
      displayName: string
      url: string
    }
  ]
  gap: number
  concept: number
  trl: number
  difficulty: number
  questions: string[]
  getId(): number
  getValue(id: string): any
}
