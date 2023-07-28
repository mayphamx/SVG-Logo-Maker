// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

// type = user response type, name = variable where answer is stored, message = question user will see before they answer
inquirer.prompt([
  {
    // WHEN I am prompted for text THEN I can enter up to three characters
    type: 'input',
    name: 'character',
    message: 'Enter up to 3 characters',
    validate: function(inputCharacters){
      if(inputCharacters.length>3) {
        console.log("\nPlease enter 3 characters or less")
        return;
      } else {
        return true;
      }
    }
  },
  {
    // WHEN I am prompted for the text color THEN I can enter a color keyword (OR a hexadecimal number)
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color',
  },
  {
    // WHEN I am prompted for a shape THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    type: 'list',
    name: 'shape',
    message: 'Pick a shape',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    // WHEN I am prompted for the shape's color THEN I can enter a color keyword (OR a hexadecimal number)
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color',
  },
])
// WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg`AND the output text "Generated logo.svg" is printed in the command line
.then ((data) => {
  let shape;

  // modify contents of shapes
  if (data.shape === 'Triangle') {
    shape = new Triangle(data.character.toUpperCase(),data.textColor,data.shapeColor)}
  if (data.shape === 'Circle') {
    shape = new Circle(data.character.toUpperCase(),data.textColor,data.shapeColor)} 
  if (data.shape === 'Square') {
    shape = new Square(data.character.toUpperCase(),data.textColor,data.shapeColor)}

  // create logo file and throw error
  fs.writeFile("./examples/logo.svg", shape.render(), (err, result)=> {
    // if (err) throw err;
    // console.log('svg has been created!')
    err ? console.log(err) : console.log('Generated logo.svg');
  });
});



