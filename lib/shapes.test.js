//  test all classes in shapes.js

// shapes.js package needed for this test application
const {Triangle, Circle, Square} = require('./shapes')

// test text/shape color and text for triangle class
describe ('Triangle', () => {
  it('should render a blue triangle with yellow text and text of "TRI"', () => {
    // must follow param order of constructor
    const shape = new Triangle('TRI', 'yellow','blue');
    expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" stroke="black" fill="blue" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">TRI</text></svg>');
  });
});

// test text/shape color and text for circle class
describe ('Circle', () => {
  it('should render a pink circle with blue text of "MAY"', () => {
    const shape = new Circle('MAY','blue', 'pink')
    expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">MAY</text></svg>');
  });
});

// test text/shape color and text for square class
describe ('Square', () => {
  it('should render a green square with orange text of "PHA"', () => {
    const shape = new Square('PHA', 'orange', 'green')
    expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="150" y="150" width="150" stroke="black" height="120" fill="green" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">PHA</text></svg>');
  });
});

