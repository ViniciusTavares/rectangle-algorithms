const { expect } = require("@jest/globals");

const { isAdjacent } = require('../src/adjacency');
const Rectangle = require("../src/Rectangle");

describe('adjacency', () => { 
  test('should return true when rectangle 1 and 2 are adjancent', () => {
    
    const rec1 = new Rectangle(0,2,0,3);
    const rec2 = new Rectangle(0,3,0,4);

    const result = isAdjacent(rec1, rec2);
    
    expect(result).toBeTruthy();
  });

  test('should return false when rectangl 1 and 2 are not adjacent', () => {
    const rec1 = new Rectangle(0,0,2,2);
    const rec2 = new Rectangle(3,3,4,4);

    const result = isAdjacent(rec1, rec2);

    expect(result).toBeFalsy();
  });
});
