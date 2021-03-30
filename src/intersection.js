/*
* Intersection is the set containing all elements of A that also belong to B
*          |   ______             (x2, y2)   
*          |  |   ___|___         
*          |  |  |   |   |           
*          |  |  |___|___|        
*          |  |______|              
*          |______________________
*  (x1, y1)
*/

const Rectangle = require("./Rectangle");

/**
 * Returns a product of an intersection between rectangle 1 and rectangle 2. 
 * If the result is not a valid rectangle, it means there's no intersection and
 * it returns null
 * @param {Rectangle} rec1 
 * @param {Rectangle} rec2
 * @returns {Rectangle | null}
*/
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