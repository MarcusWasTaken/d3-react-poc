export interface GapRelation {
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
  justification: string
  toGap: number
  fromGap: number
  getId(): number
  getValue(id: string): any
}
