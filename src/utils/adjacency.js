/*
* Adjacency is defined as the sharing of at least one side.
*       |   ___                (x2, y2)   
*       |  |   |__            
*       |  |   |  |            
*       |  |   |__|           
*       |  |___|              
*       |______________________
*  (x1, y1)
*/

/**
 * detects if two rectangles are adjacent
 * @param {Rectangle} recA 
 * @param {Rectangle} recB
 * @returns {boolean}
*/
const isAdjacent = (recA, recB) => {
  const yGap = recA.y1 > recB.y2 || recB.y1 > recA.y2;
  const xGap = recA.x1 > recB.x2 || recB.x1 > recA.x2;
  
  if(yGap || xGap) { 
    return false;
  }

  return true;
}

module.exports = { 
  isAdjacent
}

