/**
 * This functions detects if two rectangles are adjancet
 * @param {Rectangle} rec1 
 * @param {Rectangle} rec2
 * @returns {boolean}
*/
const isAdjacent = (rec1, rec2) => {
  const yGap = rec1.y1 > rec2.y2 || rec2.y1 > rec1.y2;
  const xGap = rec1.x1 > rec2.x2 || rec2.x1 > rec1.x2;
  
  if(yGap || xGap) { 
    return false;
  }

  return true;
}

module.exports = { 
  isAdjacent
}

