export interface Gap {
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
  quantification: [
    {
      key: string
      value: string
    }
  ]
  value: {
    text: string
    value: number
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
