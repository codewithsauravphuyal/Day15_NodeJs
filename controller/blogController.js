const { blogs } = require('../model/index');
const path = require('path');
const express = require('express');
const app = express();

// Serve files from the 'public' directory
app.use(express.static('public'));

exports.homePage = async (req, res) => {
    const datas = await blogs.findAll() // select * from blogs returns array 
    res.render("home", { blogs: datas })
}

exports.singleBlog = async (req, res) => {
    const id = req.params.id;
    const blog = await blogs.findByPk(id);
    res.render("singleBlog.ejs", { blog: blog });
};

exports.deleteBlog = async (req, res) => {
    const id = req.params.id
    await blogs.destroy({
        where: {
            id: id
        }
    })
    res.redirect("/")
}

exports.createForm = (req, res) => {
    res.render("create")

}

exports.createBlog = async (req,res)=>{
    let filename; 
    if(req.file){
       filename = req.file.filename
    }else{
       filename = "default-image.png" // or any other default image filename
    }
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle, 
        description : description, 
        image : filename
       
    })
    res.send("Blog added successfully")

}