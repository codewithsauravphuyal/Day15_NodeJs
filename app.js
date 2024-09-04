require('dotenv').config()
const express = require('express')
const { blogs, sequelize, users } = require('./model/index')
const { multer, storage } = require('./middleware/multerConfig')
// const {multer, storage, storage2, storage3} = require('./middleware/multerConfig')
const upload = multer({ storage: storage }) // for blog images
// const uploadBanner = multer({ storage: storage2 }) // for banner images
// const uploadUser = multer({ storage: storage3 }) // for user images
const bcrypt = require("bcrypt")
const { homePage, singleBlog, deleteBlog, createForm, createBlog } = require('./controller/blogController')
const { registerUser, loginUser, renderRegister, renderLogin } = require('./controller/authController')

const app = express()

app.set('view engine', 'ejs')
require("./model/index")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
require("./model/index")
app.use(express.urlencoded({ extended: true }))

app.get("/", homePage)
app.get("/blog/:id", singleBlog)
app.get("/delete/:id", deleteBlog)
app.get("/create", createForm)
app.post('/create', upload.single('image'), createBlog)

app.get("/register", renderRegister)
app.post("/register", registerUser)
app.get("/login", renderLogin)
app.post("/login", loginUser)



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