import { GapRelation } from 'models/gap-relation/GapRelation'
import { GapConceptRelation } from 'models/gap-concept-relation/GapConceptRelation'
import { Concept } from 'models/concept/Concept'
import { Gap } from 'models/gap/Gap'
import { getCurrentDimensionValue } from './DimensionHelper'
import { GraphDataHolder } from './GraphDataHolder'

class Counter {
  count: number
  constructor() {
    this.count = 0;
  }
  add() {
    this.count = this.count + 30;
    return this.count;
  }
  reset() {
    this.count = 0;
  }
}

export var outsideCoordinates = [];
export var outsideGapXCord = new Counter();
export var outsideConceptXCord = new Counter();


export function getCoordinatesFunction(self) {
  return function (gap: Gap) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(gap, self.xDimension.getValue())
    )
    var yCord = self.yDimension.getCoordinateValue(
      getCurrentDimensionValue(gap, self.yDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 600;
      xCord = outsideGapXCord.add();
      saveOutsidePosition(xCord, yCord, gap.id);
    } else {
      removeOutsidePosition(gap.id);
    }
    return {
      cx: xCord,
      cy: yCord
    }
  }
}

export function getTransformCoordinates(self) {
  return function (concept: Concept) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(concept, self.xDimension.getValue())
    )
    var yCord = self.yRightDimension.getCoordinateValue(
      getCurrentDimensionValue(concept, self.yRightDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 640;
      xCord = outsideConceptXCord.add();
      saveOutsidePosition(xCord, yCord, concept.id);
    } else {
      removeOutsidePosition(concept.id);
    }
    return (
      'translate(' +
      xCord +
      ',' +
      yCord +
      ')'
    )
  }
}

export function getGapRelationStartCoordinatesFunction(self) {
  return function (relation: GapRelation) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.fromGap),
        self.xDimension.getValue())
    )
    var yCord = self.yDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.fromGap),
        self.yDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 600;
      xCord = outsideCoordinates.find(n => n.id == relation.fromGap).xCord;
    }
    return {
      x1: xCord,
      y1: yCord
    }
  }
}

export function getGapRelationEndCoordinatesFunction(self) {
  return function (relation: GapRelation) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.toGap),
        self.xDimension.getValue())
    )
    var yCord = self.yDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.toGap),
        self.yDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 600;
      xCord = outsideCoordinates.find(n => n.id == relation.toGap).xCord;
    }
    return {
      x2: xCord,
      y2: yCord
    }
  }
}

export function getGapConceptRelationStartCoordinatesFunction(self) {
  return function (relation: GapConceptRelation) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getConcept(relation.concept),
        self.xDimension.getValue())
    )
    var yCord = self.yRightDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getConcept(relation.concept),
        self.yRightDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 640;
      xCord = outsideCoordinates.find(n => n.id == relation.concept).xCord;
    }
    return {
      x1: xCord,
      y1: yCord
    }
  }
}

export function getGapConceptRelationEndCoordinatesFunction(self) {
  return function (relation: GapConceptRelation) {
    var xCord = self.xDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.gap),
        self.xDimension.getValue())
    )
    var yCord = self.yDimension.getCoordinateValue(
      getCurrentDimensionValue(
        GraphDataHolder.getGap(relation.gap),
        self.yDimension.getValue())
    )
    if (xCord == undefined || yCord == undefined) {
      yCord = 600;
      xCord = outsideCoordinates.find(n => n.id == relation.gap).xCord;
    }
    return {
      x2: xCord,
      y2: yCord
    }
  }
}

export function getGapConceptRelationLabelCoordinatesFunction(self) {
  var getStartCords = getGapConceptRelationStartCoordinatesFunction(self);
  var getEndCords = getGapConceptRelationEndCoordinatesFunction(self);

  return function (relation: GapConceptRelation) {
    const startCords = getStartCords(relation)
    const endCords = getEndCords(relation)

    var middlePointX = (startCords.x1 + endCords.x2) / 2;
    var middlePointY = (startCords.y1 + endCords.y2) / 2;

    return {
      x: middlePointX,
      y: middlePointY
    }
  }
}



function saveOutsidePosition(xCord, yCord, id) {
  var current = outsideCoordinates.find(node => node.id === id);
  if (current == undefined) {
    var obj = {
      'xCord': xCord,
      'yCord': yCord,
      'id': id
    }
    outsideCoordinates.push(obj);
  }
  else {
    current.yCord = yCord;
    current.xCord = xCord;
  }
}

function removeOutsidePosition(nodeId) {
  outsideCoordinates = outsideCoordinates.filter(function (el) {
    return el.id != nodeId;
  })
}

