require('dotenv').config()
const express = require('express')
const { blogs, sequelize } = require('./model/index')
const {multer, storage} = require('./middleware/multerConfig')
// const {multer, storage, storage2, storage3} = require('./middleware/multerConfig')
const upload = multer({ storage: storage }) // for blog images
// const uploadBanner = multer({ storage: storage2 }) // for banner images
// const uploadUser = multer({ storage: storage3 }) // for user images

const app = express()

app.set('view engine', 'ejs')
require("./model/index")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/create", (req, res) => {
    res.render("create")
})

app.get("/blog/:id",async (req,res)=>{
    const id = req.params.id
    const blog =  await blogs.findByPk(id) // returns object 
    res.render("singleBlog.ejs",{blog : blog})
})

app.get("/delete/:id",async (req,res)=>{
    const id = req.params.id
    await blogs.destroy({
        where : {
            id : id
        }
    })
    res.redirect("/")
})


app.get("/", async (req, res) => {
    try {
      const datas = await blogs.findAll() //select * from Blogs returns array
      res.render("home", { blogs: datas })
    } catch (error) {
      console.error(error)
      res.status(500).send("Error fetching blogs")
    }
  })

// Upload blog image
app.post('/create', upload.single('image'), async (req, res) => {
    // const title = req.body.title
    // const subtitle = req.body.title
    // const description = req.body.description
    const { title, subtitle, description } = req.body
    console.log(req.file)
    const filename = req.file.filename
    await blogs.create({
        title: title,
        subtitle: subtitle,
        description: description,
        image: req.file.filename // save the image filename to the database
    })

    res.send('Blog Added Successfully');
});

// // Upload banner image
// app.post('/upload-banner', uploadBanner.single('banner'), (req, res) => {
//     res.send(`Banner uploaded successfully to ${req.file.path}`);
// });

// // Upload user image
// app.post('/upload-user', uploadUser.single('user'), (req, res) => {
//     res.send(`User image uploaded successfully to ${req.file.path}`);
// });

app.use(express.static('public/css/'))
app.use(express.static('storage'));

app.listen(3000, () => {
    console.log('server is running on port 3000')
})