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

const Rectangle = require("../Rectangle");

/**
 * Returns a product of an intersection between rectangle A and rectangle B. 
 * If the result is not a valid rectangle, it means there's no intersection and
 * it returns null
 * @param {Rectangle} rec1 
 * @param {Rectangle} recB
 * @returns {Rectangle}
*/
const getIntersection = (rec1, recB) => {
  const x1 = Math.max(rec1.x1, recB.x1);
  const y1 = Math.max(rec1.y1, recB.y1);
  const x2 = Math.min(rec1.x2, recB.x2);
  const y2 = Math.min(rec1.y2, recB.y2);

  const newRec = new Rectangle(x1, y1, x2, y2);

  newRec.validate();
  
  return newRec;
}

module.exports = { 
  getIntersection
}