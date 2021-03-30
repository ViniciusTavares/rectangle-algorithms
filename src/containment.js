/*
* When Rectangle 2 is entirely inside Rectangle 1, Rectangle fully contains Rectangle 2
*       |   ______             (x2, y2)   
*       |  |  __  |         
*       |  | |  | |           
*       |  | |__| |        
*       |  |______|              
*       |______________________
*  (x1, y1)
*/

/**
 * detects if Rectangle 2 is wholly contained within Rectangle 1
 * @param {Rectangle} rec1 
 * @param {Rectangle} rec2
 * @returns {boolean}
*/
const recAWhollyContainsB = (rec1, rec2) => (
    rec2.x2 < rec1.x2 
    && rec2.x1 > rec1.x1 
    && rec2.y1 > rec1.y1 
    && rec2.y2 < rec1.y2
)

module.exports = { 
    recAWhollyContainsB
}