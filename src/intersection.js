const { moduleExpression } = require("@babel/types");
const Rectangle = require("./Rectangle");

const getIntersection = (rec1, rec2) => {
  const x1 = Math.max(rec1.x1, rec2.x1);
  const y1 = Math.max(rec1.y1, rec2.y1);
  const x2 = Math.min(rec1.x2, rec2.x2);
  const y2 = Math.min(rec1.y2, rec2.y2);

  const newRec = new Rectangle(x1, y1, x2, y2);

  if (!newRec.isValid()) { 
    return null;
  }

  return newRec;
}

module.exports = { 
  getIntersection
}