#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const quiz = await inquirer.prompt([
    {
        name: 'quesion_1',
        type: 'list',
        message: chalk.yellow `Which company developed JavaScript in the 1990s?`,
        choices: ['Google', 'Netscape', 'Apple']
    },
    {
        name: 'quesion_2',
        type: 'list',
        message: chalk.green `Which keyword is used to declare a variable that can be reassigned in JavaScript?`,
        choices: ['let', 'const', 'var']
    },
    {
        name: 'quesion_3',
        type: 'list',
        message: chalk.yellow `Which keyword is used to declare a variable with a block scope in JavaScript?`,
        choices: ['let', 'var', 'global', 'static']
    },
    {
        name: 'quesion_4',
        type: 'list',
        message: chalk.gray `Which operator is used to add two values?`,
        choices: ['+', '-', '*', '/']
    },
    {
        name: 'quesion_5',
        type: 'list',
        message: chalk.blueBright `Type Aliases are mostly used with ______.`,
        choices: ['number', 'string', 'boolean']
    }
]);
let score = 0;
switch (quiz.quesion_1) {
    case "Netscape":
        console.log('1. Correct Answer');
        score++;
        break;
    default:
        console.log('1. Incorrect Answer');
}
switch (quiz.quesion_2) {
    case "let":
        console.log('2. Correct Answer');
        score++;
        break;
    default:
        console.log('2. Incorrect Answer');
}
switch (quiz.quesion_3) {
    case "let":
        console.log('3. Correct Answer');
        score++;
        break;
    default:
        console.log('3. Incorrect Answer');
}
switch (quiz.quesion_4) {
    case "+":
        console.log('4. Correct Answer');
        score++;
        break;
    default:
        console.log('4. Incorrect Answer');
}
switch (quiz.quesion_5) {
    case "string":
        console.log('5. Correct Answer');
        score++;
        break;
    default:
        console.log('5. Incorrect Answer');
}
console.log(`SCORE:  ${score}`);
console.log('Best of Luck!!!!!!!!!!');
