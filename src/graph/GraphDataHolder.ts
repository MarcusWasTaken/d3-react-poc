import { GapRelation } from 'models/gap-relation/GapRelation'
import { GapConceptRelation } from 'models/gap-concept-relation/GapConceptRelation'
import { Gap } from 'models/gap/Gap'
import { Concept } from 'models/concept/Concept'
import { GraphObject } from 'models/GraphObject'
import GapService from 'models/gap/GapService';
import ConceptService from 'models/concept/ConceptService';
import GapRelationService from 'models/gap-relation/GapRelationService';
import GapConceptRelationService from 'models/gap-concept-relation/GapConceptRelationService';


class GraphDataHolderSingleton {
  gaps = []
  concepts = []
  gapRelations = []
  gapConceptRelations = []
  yAxis = ''
  xAxis = ''
  yAxisRight = ''

  private updateDataWithMethods(data) {
    this.gaps = []
    this.concepts = []
    this.gapRelations = []
    this.gapConceptRelations = []
    data.gaps.forEach(gap => {
      gap.getId = () => gap.id,
        gap.getValue = (id: string) => {
          if (id === 'value') {
            return gap.value.value
          }
          return gap[id]
        }
      this.gaps.push(gap)
    })
    data.concepts.forEach(concept => {
      concept.getId = () => concept.id,
        concept.getValue = (id: string) => {
          if (id === 'value') {
            return concept.complexity.value
          }
          return concept[id]
        }
      this.concepts.push(concept)
    })

    data.gapRelations.forEach(relation => {
      relation.getId = () => relation.id,
        relation.getValue = (id: string) => {
          return relation[id]
        }
      this.gapRelations.push(relation)
    })

    data.gapConceptRelations.forEach(relation => {
      relation.getId = () => relation.id,
        relation.getValue = (id: string) => {
          return relation[id]
        }
      this.gapConceptRelations.push(relation)
    })
  }

  public updateData(data, dimensionSelections) {
    this.updateDataWithMethods(data)
    this.yAxis = dimensionSelections.yGapDimension;
    this.xAxis = dimensionSelections.xDimension;
    this.yAxisRight = dimensionSelections.yConceptDimension;
  }

  public nodeSelctionChange(selectedNodes) {
    // -> set Marcus function here when creating the graph
  }

  public getConcept(id) {
    return this.getConceptNodes().find(concept => concept.getId() === id);
  }

  public getGap(id) {
    return this.gaps.find(gap => gap.id === id);
  }

  public getGapNodes() {
    return this.gaps;
  }

  public getConceptNodes() {
    return this.concepts;
  }

  public getGapRelations() {
    return this.gapRelations;
  }

  public getGapConceptRelations() {
    return this.gapConceptRelations;
  }

  public getRelations() {
    return [...this.getGapRelations(), ...this.getGapConceptRelations()]
  }

  public getNodes() {
    return [...this.getGapNodes(), ...this.getConceptNodes()]
  }



}

export const GraphDataHolder = new GraphDataHolderSingleton()