const Rectangle = require("../src/Rectangle");

describe('Rectangle', () => { 
  test('should be a instance of Rectangle', () => { 
    const rectangle = new Rectangle();

    expect(rectangle).toBeInstanceOf(Rectangle);
  });

  test('should match all properties', () => {
    const x1 = 0;
    const y1 = 0; 
    const x2 = 2;
    const y2 = 2;

    const rectangle = new Rectangle(x1, y1, x2, y2);

    expect(rectangle.x1).toEqual(x1);
    expect(rectangle.y1).toEqual(y1);
    expect(rectangle.x2).toEqual(x2);
    expect(rectangle.y2).toEqual(y2);
  });
});