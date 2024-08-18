// const app = require('express')()
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const testimonals = {
        name: 'Manish Banset',
        message: "Manish Basnet sent a message: 'KHATRA DEVELOPER BANNU HAI'"
    }
    const data = {
        name: "Saurav Phuyal",
        age: 23,
        location: 'Gachhiya'
    }
    const nepal = {
        continent: 'Asia',
    }
    const kura = {
        desc: 'Am I MERN DEVELOPER?',
    }
    res.render("home.ejs", {
        haha: data,
        hehe: nepal,
        huhu: testimonals,
        hora: kura
    })
})

app.get('/about', (req, res) => {
    res.render("test/about")
})

app.get('/blog', (req, res) => {
    const kura = {
        desc: 'Am I MERN DEVELOPER?',
    }
    res.render("blog.ejs", {
        hora: kura
    })
})
app.get('/timepass', (req, res) => {
    const bored = {
        manishlaivaneko: 'Oe, Xutti Vayo vanna!',
    }
    res.render("timepass.ejs", {
        hahahe: bored
    })
})


app.use(express.static('public/css/'))

app.listen(3306, () => {
    console.log('server is running on port 3000')
})

