const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs = require('express-handlebars')

const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,'public')))

console.log("Path : ",path.join(__dirname,'public'))

app.engine('hbs',hbs.engine(
    {
        extname : '.hbs'
    }
))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources/views'))
 
console.log(path.join(__dirname,'resources/views'))

app.use(morgan('combined'))


 app.get('/',(req,res)=> {
    
    res.render('home')
 })

 app.get('/news',(req,res)=> {
    
    res.render('news')
 })
 app.listen(port,()=> console.log(`Excample app listening at http://localhost://${port}`))