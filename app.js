require('dotenv').config()
const express = require('express')
const { blogs, sequelize, users } = require('./model/index')
const { homePage, singleBlog, deleteBlog, createForm, createBlog } = require('./controller/blogController')
const { registerUser, loginUser, renderRegister, renderLogin } = require('./controller/authController')

const app = express()
const blogRoute = require("./routes/blogRoute")
const authRoute = require("./routes/authRoute")

app.set('view engine', 'ejs')
require("./model/index")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//http://localhost:3000/ + /
//http://localhost:3000/ + /blog/:id
//http://localhost:3000/ + /delete/:id
//http://localhost:3000/ + /create
app.use('/', blogRoute)
app.use('/', authRoute)
// http://localhost:3000 + register
// http://localhost:3000 + login



// // Upload banner image
// app.post('/upload-banner', uploadBanner.single('banner'), (req, res) => {
//     res.send(`Banner uploaded successfully to ${req.file.path}`);
// });

// // Upload user image
// app.post('/upload-user', uploadUser.single('user'), (req, res) => {
//     res.send(`User image uploaded successfully to ${req.file.path}`);
// });

app.use(express.static('public/css/'))
app.use(express.static('./storage/'));

app.listen(3000, () => {
    console.log('server is running on port 3000')
})