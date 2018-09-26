import { GraphObjectData } from 'models/GraphObject';

export default class GapConceptRelationService {
  static async list(): Promise<GraphObjectData[]> {
    let response = await fetch('http://localhost:3000/gap-concept-relations')
    return await response.json()
  }

  static async get(id: string): Promise<GraphObjectData> {
    let response = await fetch(
      `http://localhost:3000/gap-concept-relation/${id}`
    )
    return await response.json()
  }

  static async postGap(data) {
    const rawResponse = await fetch(
      'http://localhost:3000/gap-concept-relations',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    return await rawResponse.json()
  }
}
