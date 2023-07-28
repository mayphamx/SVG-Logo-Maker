//  WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I entered

// class shape and its constructor parameters defined
class Shape {
  constructor(character, textColor, shapeColor) {
    this.character = character;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// class for specific shape and components of what to render with userinputs of characters, text/shape color
class Circle extends Shape {
  render() {
    // modifications/styling for circle logo, shape, and text
    return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/><text x="150" y="120" font-size="67" text-anchor="middle" fill="${this.textColor}">${this.character}</text></svg>`
  }
}
class Triangle extends Shape {
  render() {
    // modifications/styling for triangle logo, shape, and text
    return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.character}</text></svg>`
  }
}
class Square extends Shape {
  render() {
  // modifications/styling for square logo, shape, and text
    return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="50" y="50" width="160" height="160" fill="${this.shapeColor}"/><text x="130" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.character}</text></svg>`
  }
}

// export shapes
module.exports ={Circle, Triangle, Square};
