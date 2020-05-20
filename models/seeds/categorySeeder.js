const mongoose = require('mongoose')
const Category = require('../category')
const categoryList = require('../seeds/category.json').category

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  for (let i = 0; i < categoryList.length; i++) {
    Category.create({
      category: categoryList[i]
    })
  }
  console.log('Category seeds are created!!')
})