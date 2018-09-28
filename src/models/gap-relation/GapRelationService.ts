import { GraphObjectData } from 'models/GraphObject';

export default class GapRelationService {
  static async list(): Promise<GraphObjectData[]> {
    let response = await fetch('http://localhost:3000/gap-relations')
    return await response.json()
  }

  static async get(id: string): Promise<GraphObjectData> {
    let response = await fetch(`http://localhost:3000/gap-relation/${id}`)
    return await response.json()
  }

  static async postGap(data) {
    const rawResponse = await fetch('http://localhost:3000/gap-relations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await rawResponse.json()
  }
}
