export interface State {
  id: number
  creationDate: string
  owner: string
  createdBy: string
  changedBy: string
  changeDate: string
  revisitDate: string
  dueDate: string
  getId(): number
  getValue(id: string): any
}

export interface GraphObjectData {
  id: number
  creationDate: string
  states: State[]
}

export class GraphObject {
  id: number
  states: State[]

  constructor(graphObjectData: GraphObjectData) {
    this.id = graphObjectData.id
    this.states = graphObjectData.states
  }

  public getStates(): State[] {
    return this.states;
  }
}
