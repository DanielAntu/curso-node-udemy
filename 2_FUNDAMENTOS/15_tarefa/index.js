const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: nome,
        message: 'Qual seu nome? '
    }, 
    {
        name: Idade,
        message: 'Qual a sua idade? '
    }
]).then((answer) => {
    console.log(chalk.bgYellow.black(`O seu nome é ${answer.nome} e sua idade é ${answer.Idade}`))
}).catch(err => console.log(err))

