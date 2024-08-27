// const app = require('express')()
const express = require('express')
const app = express()
require('dotenv').config()

const { blogs, sequelize } = require('./model/index');


app.set('view engine', 'ejs')
require("./model/index")

//app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/create", (req, res)=>{
    res.render('create')
})
app.get("/create", (req, res)=>{
    res.render('create')
})

app.post('/create',async (req, res) => {
//    const title = req.body.title
//    const subtitle =  req.body.subtile
//     const description = req.body.description
    const {title, subtitle, description} = req.body

    // "INSERT INTO blogs (title, subtitle, description) values ('$title', '$subtitle', $description)"
    // sequelize.query("INSERT INTO blogs (title, subtitle, description) values ('$title', '$subtitle', $description)")

    await blogs.create({
        title : title,
        subtitle : subtitle,
        description : description
    })

    res.send('Blogs Added Successfully'); // Send a response back to the client
});

app.use(express.static('public/css/'))

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

