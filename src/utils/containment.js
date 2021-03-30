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
 * detects if Rectangle B is wholly contained within Rectangle A
 * @param {Rectangle} recA 
 * @param {Rectangle} recB
 * @returns {boolean}
*/
const doesRecAWhollyContainB = (recA, recB) => (
    recB.x2 < recA.x2 
    && recB.x1 > recA.x1 
    && recB.y1 > recA.y1 
    && recB.y2 < recA.y2
)

module.exports = { 
    doesRecAWhollyContainB
}