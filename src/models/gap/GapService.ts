import { GraphObjectData } from "models/GraphObject";

export default class GapService {
  static async list(): Promise<GraphObjectData[]> {
    let response = await fetch('http://localhost:3000/gaps')
    return await response.json()
  }

  static async get(id: string): Promise<GraphObjectData> {
    let response = await fetch(`http://localhost:3000/gaps/${id}`)
    return await response.json()
  }

  static async post(data) {
    const rawResponse = await fetch('http://localhost:3000/gaps', {
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
