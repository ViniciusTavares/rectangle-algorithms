/*
* a rectangle is defined by two tuples, 
* which (x1, y1 ) is the coordinate of bottom-left corner
* and (x1, y2) is the coordinate of the top-right corner
*          _____________________ (x2, y2) 
*          |                   |  
*          |                   |
*          |                   |  
*          |                   |
*          |                   |
*          |___________________|
*  (x1, y1)
*/

class Rectangle {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  validate() {
    if (this.x1 >= this.x2) {
      throw Error('Invalid Rectangle points. x1 is higher or equal x2.')
    }

    if(this.y1 >= this.y2) { 
      throw Error('Invalid Rectangle points. y1 is higher or equal y2.')
    }
  }
}
  
module.exports = Rectangle;