require('dotenv').config(); // Load environment variables
const express = require('express');
const path = require('path'); // Needed for serving static files correctly
const { blogs, sequelize, users } = require('./model/index'); // Import models if needed for syncing
const blogRoute = require("./routes/blogRoute"); // Blog routes
const authRoute = require("./routes/authRoute"); // Auth routes

const app = express()
const blogRoute = require("./routes/blogRoute")
const authRoute = require("./routes/authRoute")

// Set view engine to EJS for rendering templates
app.set('view engine', 'ejs')
require("./model/index")

// Middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
//http://localhost:3000/ + /
//http://localhost:3000/ + /blog/:id
//http://localhost:3000/ + /delete/:id
//http://localhost:3000/ + /create
app.use('/', blogRoute)
app.use('/', authRoute)
// http://localhost:3000 + register
// http://localhost:3000 + login


// Example banner and user image uploads (Commented in case needed in the future)
// // Upload banner image
// app.post('/upload-banner', uploadBanner.single('banner'), (req, res) => {
//     res.send(`Banner uploaded successfully to ${req.file.path}`);
// });

// // Upload user image
// app.post('/upload-user', uploadUser.single('user'), (req, res) => {
//     res.send(`User image uploaded successfully to ${req.file.path}`);
// });


// Serve static files (like CSS) from the public directory
app.use(express.static('public/css/'))

// Serve uploaded images from the 'storage' folder via '/uploads'
app.use('/uploads', express.static(path.join(__dirname, 'storage')));

app.listen(3000, () => {
    console.log('server is running on port 3000')
})