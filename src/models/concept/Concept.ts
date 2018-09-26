export interface Concept {
  id: number
  creationDate: string
  owner: string
  createdBy: string
  changedBy: string
  changeDate: string
  revisitDate: string
  dueDate: string
  viewpoint: string
  title: string
  subTitle: string
  description: string
  complexity: {
    description: string
    value: number
    disciplines: string[]
  }
  illustrations: [
    {
      title: string
      fileName: string
    }
  ]
  links: [
    {
      displayName: string
      url: string
    }
  ]
  getId(): number
  getValue(id: string): any
}
