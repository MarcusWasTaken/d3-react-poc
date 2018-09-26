import { GapRelation } from 'models/gap-relation/GapRelation'
import { GapConceptRelation } from 'models/gap-concept-relation/GapConceptRelation'
import { Gap } from 'models/gap/Gap'
import { Concept } from 'models/concept/Concept'
import { GraphObject } from '../models/GraphObject'
import GapService from '../models/gap/GapService'
import ConceptService from '../models/concept/ConceptService'
import GapRelationService from '../models/gap-relation/GapRelationService'
import GapConceptRelationService from '../models/gap-concept-relation/GapConceptRelationService'

class GraphDataStoreSingleton {
  gaps: GraphObject[] = []
  concepts: GraphObject[] = []
  gapRelations: GraphObject[] = []
  gapConceptRelations: GraphObject[] = []

  date: Date

  public async loadData(): Promise<void> {
    const gapsData = await GapService.list()
    gapsData.forEach(gapData => {
      gapData.states.forEach((state: Gap) => {
        ;(state.id = gapData.id),
          (state.creationDate = gapData.creationDate),
          (state.getId = () => state.id),
          (state.getValue = (id: string) => {
            if (id === 'value') {
              return state.value.value
            }
            return state[id]
          })
      })
      this.gaps.push(new GraphObject(gapData))
    })

    const conceptsData = await ConceptService.list()
    conceptsData.forEach(conceptData => {
      conceptData.states.forEach((state: Concept) => {
        ;(state.id = conceptData.id),
          (state.creationDate = conceptData.creationDate),
          (state.getId = () => state.id),
          (state.getValue = (id: string) => {
            if (id === 'value') {
              return state.complexity.value
            }
            return state[id]
          })
      })
      this.concepts.push(new GraphObject(conceptData))
    })

    const gapRelationsData = await GapRelationService.list()
    gapRelationsData.forEach(gapRelationData => {
      gapRelationData.states.forEach((state: GapRelation) => {
        ;(state.id = gapRelationData.id),
          (state.creationDate = gapRelationData.creationDate),
          (state.getId = () => state.id),
          (state.getValue = (id: string) => {
            return state[id]
          })
      })
      this.gapRelations.push(new GraphObject(gapRelationData))
    })

    const gapConceptRelationsData = await GapConceptRelationService.list()
    gapConceptRelationsData.forEach(gapConceptRelationData => {
      gapConceptRelationData.states.forEach((state: GapConceptRelation) => {
        ;(state.id = gapConceptRelationData.id),
          (state.creationDate = gapConceptRelationData.creationDate),
          (state.getId = () => state.id),
          (state.getValue = (id: string) => {
            return state[id]
          })
      })
      this.gapConceptRelations.push(new GraphObject(gapConceptRelationData))
    })
  }

  public getData(date: Date): any {
    this.update(date)
    return {
      gaps: this.getGapNodes(),
      concepts: this.getConceptNodes(),
      gapRelations: this.getGapRelations(),
      gapConceptRelations: this.getGapConceptRelations()
    }
  }

  public getDateRange(): Date[] {
    const gapChangeDates = this.getChangeDates(this.gaps)
    const conceptChangeDates = this.getChangeDates(this.concepts)
    const gapRelationChangeDates = this.getChangeDates(this.gapRelations)
    const gapConceptRelationChangeDates = this.getChangeDates(
      this.gapConceptRelations
    )

    const datesAsString = [
      ...gapChangeDates,
      ...conceptChangeDates,
      ...gapRelationChangeDates,
      ...gapConceptRelationChangeDates
    ]
    const sortedDates = datesAsString
      .map(date => {
        return new Date(date)
      })
      .sort(this.dateSortAsc)
    return sortedDates
  }

  public update(date: Date): void {
    this.date = date
  }

  private dateSortAsc(date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    if (date1 > date2) return 1
    if (date1 < date2) return -1
    return 0
  }

  private getChangeDates(graphObjects: GraphObject[]): string[] {
    const changeDates = []
    graphObjects.forEach(graphObject => {
      graphObject.getStates().forEach(state => {
        changeDates.push(state.changeDate)
      })
    })
    return changeDates
  }

  public getConcept(id: number) {
    return this.getConceptNodes().find(concept => concept.getId() === id)
  }

  public getGap(id: number) {
    return this.getGapNodes().find(gap => gap.getId() === id)
  }

  public getGapNodes(): Gap[] {
    return this.getLatestToDateStates(this.gaps)
  }

  public getConceptNodes(): Concept[] {
    return this.getLatestToDateStates(this.concepts)
  }

  public getGapRelations(): GapRelation[] {
    return this.getLatestToDateStates(this.gapRelations)
  }

  public getGapConceptRelations(): GapConceptRelation[] {
    return this.getLatestToDateStates(this.gapConceptRelations)
  }

  public getRelations() {
    return [...this.getGapRelations(), ...this.getGapConceptRelations()]
  }

  public getNodes() {
    return [...this.getGapNodes(), ...this.getConceptNodes()]
  }

  private getLatestToDateStates(graphObjects: GraphObject[]) {
    const result = []
    graphObjects.forEach(graphObject => {
      const latestToDate = this.getLatestToDate(this.date, graphObject.states)
      if (latestToDate) {
        result.push(latestToDate)
      }
    })
    return result
  }

  private getLatestToDate(date: Date, states) {
    let tempState
    states.forEach(state => {
      if (new Date(state.changeDate) < date) {
        tempState = state
      }
    })
    return tempState
  }
}

export const GraphDataStore = new GraphDataStoreSingleton()
