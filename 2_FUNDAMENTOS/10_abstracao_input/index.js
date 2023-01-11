const inquirer = require('inquirer')

inquirer.prompt([
{
    name: p1, 
    message: 'Qual a sua primeira nota? '
}, 
{
    name: p2,
    message: 'Qual a sua segunda nota? '
}
]).then((answers) => {
    console.log(answers)
}).catch(err => console.log(err))