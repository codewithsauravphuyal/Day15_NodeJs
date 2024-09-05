const { homePage, createForm, createBlog, singleBlog, deleteBlog } = require('../controller/blogController');
const router = require('express').Router();
const { multer, storage } = require('../middleware/multerConfig'); // Assuming correct path to multerConfig

// Set up multer for blog images
const upload = multer({ storage: storage }); // for blog images

// Routes
router.route("/").get(homePage); // Display homepage
router.route("/blog/:id").get(singleBlog); // Display a single blog post
router.route("/delete/:id").get(deleteBlog); // Delete a blog post
router.route("/create")
    .get(createForm) // Display form for creating blog post
    .post(upload.single('image'), createBlog); // Handle blog creation with image upload

module.exports = router;
