const { expect } = require("@jest/globals");

const { recAWhollyContainsB } = require('../src/containment');
const Rectangle = require("../src/Rectangle");

describe('recAWhollyContainsB', () => { 
  test('should return true when Rec 1 fully contain Rec 2', () => {
    
    const rec1 = new Rectangle(1,1,4,3);
    const rec2 = new Rectangle(2,2,3,2);

    const result = recAWhollyContainsB(rec1, rec2);

    expect(result).toBeTruthy();
  });

  test('should return false when rec 1 does not fully contain rec 2', () => {
   
    const rec1 = new Rectangle(1,1,4,4);
    const rec2 = new Rectangle(2,2,5,2);

    const result = recAWhollyContainsB(rec1, rec2);

    expect(result).toBe(false);
  });
});
