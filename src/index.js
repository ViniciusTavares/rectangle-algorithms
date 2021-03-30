const inquirer = require('inquirer');
const Rectangle = require('./Rectangle');
const { 
  getIntersection, 
  doesRecAWhollyContainB, 
  isAdjacent 
} = require('./utils');

const choiceEnum = Object.freeze({
  INTERSECTION: 'INTERSECTION',
  ADJACENCY: 'ADJACENCY',
  CONTAINMENT: 'CONTAINMENT'
});

const questionEnum = Object.freeze({
  WHICH_ALGORITM: 'algorithm',
  VALUES_RECTAGLE_A: 'rectagleA',
  VALUES_RECTAGLE_B: 'rectagleB'
})

const decisionHash = { 
  [choiceEnum.INTERSECTION]: (recA, recB) => { 
    try {
      const intersectionRectangle = getIntersection(recA, recB);

      console.log(`Intersection points: x=: ${intersectionRectangle.x1}, y1= ${intersectionRectangle.y1}, x2= ${intersectionRectangle.x2}, y2= ${intersectionRectangle.y2}`);
    } catch(err) { 
      console.log('There is no intersection');
    }
  },
  [choiceEnum.ADJACENCY]: (recA, recB) => {
    const result = isAdjacent(recA, recB);

    console.log(`Is rectangle A and B adjacent: ${result}`)
  }, 
  [choiceEnum.CONTAINMENT]: (recA, recB) => { 
    const result = doesRecAWhollyContainB(recA, recB);

    console.log(`Is rectangle B wholly contained within Rectangle A: ${result}`)
  }
};

(async function main() {  
    const promptResult = await inquirer
    .prompt([
      {
        name: questionEnum.WHICH_ALGORITM,
        message: 'Which algorithm do you want to run?',
        choices: [choiceEnum.INTERSECTION, choiceEnum.ADJACENCY, choiceEnum.CONTAINMENT],
        type: "list"
      }, 
      {
        name: questionEnum.VALUES_RECTAGLE_A,
        message: 'You will be defining coordinates for two squares \n For each square, you must define bottom-left (x1, y1) and top-right (x2, y2) \n Separate each of them with commas \n For example: 0,2,0,3 \n. Type values to define Square A: ',
        type: "input",
      },
      {
        name: questionEnum.VALUES_RECTAGLE_B,
        message: 'Type values to define Square B:',
        type: "input",
      }
    ]);

    const callFn = decisionHash[promptResult[questionEnum.WHICH_ALGORITM]];
    
    const rectangleAArgs = promptResult[questionEnum.VALUES_RECTAGLE_A].split(',');
    const rectangleBArgs = promptResult[questionEnum.VALUES_RECTAGLE_B].split(',');

    console.log('Validating Rectangle A'); 

    const recA = new Rectangle(
      rectangleAArgs[0], 
      rectangleAArgs[1], 
      rectangleAArgs[2], 
      rectangleAArgs[3]
    );
    
    recA.validate();

    console.log('Validating Rectangle B'); 

    const recB = new Rectangle(
      rectangleBArgs[0], 
      rectangleBArgs[1], 
      rectangleBArgs[2], 
      rectangleBArgs[3]
    );
    recB.validate();
    
    callFn(recA, recB);
}());