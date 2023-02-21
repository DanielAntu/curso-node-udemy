const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/testemongoose2')
    console.log('Conectou ao MongoDB com mongoose')
}

mongoose.set('strictQuery', true);

main().catch((err) => console.log(err))

module.exports = mongoose