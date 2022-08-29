const router = require('express').Router();
const { verifyTokenAndAdmin } = require('./verifyToken');

const Blog = require('../models/Blog');

//ADD NEW BLOG
router.post('/new', verifyTokenAndAdmin, async (req, res) => {
    if (!req.body) {
        res.status(400).json("Please fill the required inputs!")
    } else {
        try {
            const newBlog = new Blog(req.body);
            const savedBlog = await newBlog.save();
            res.status(200).json(savedBlog);
        } catch (error) {
            res.status(500).json(error);
        } 
    }
});

//EDIT BLOG
router.put('/edit/:blogId', verifyTokenAndAdmin, async (req, res) => {
    if (!req.body) {
        res.status(400).json('Please fill the required inputs!');
    } else {
        try {
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedBlog);
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//DELETE BLOG
router.delete('/delete/:blogId', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.blogId);
        res.status(200).json('Blog deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET BLOG
router.get('/get/:blogId', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL BLOGS
router.get('/getall', async (req, res) => {
    const queryNew = req.query.new;
    let blogs;
    try {
        if (queryNew) {
            blogs = await Blog.find().sort({ createdAt: -1 }).limit(10);
        } else {
            blogs = await Blog.find();
        }
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
