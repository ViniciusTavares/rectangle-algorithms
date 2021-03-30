const { getIntersection } = require('../src/utils');
const Rectangle = require("../src/Rectangle");

describe('intersection', () => { 
  test('should return new rectangle with intersection points', () => {
    
    const rec1 = new Rectangle(0,0,2,2);
    const rec2 = new Rectangle(1,1,3,3);

    const result = getIntersection(rec1, rec2);

    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Rectangle);
  });

  test('should return invalid rectangle because theres no intersectation', () => {
    const rec1 = new Rectangle(0,0,2,2);
    const rec2 = new Rectangle(3,3,4,4);

    try { 
      getIntersection(rec1, rec2);
    } catch(error) {
      expect(error).toBeDefined();
    }
  });
});
