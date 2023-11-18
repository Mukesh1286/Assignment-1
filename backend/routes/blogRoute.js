const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
//   uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
// const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/createblog", authMiddleware, isAdmin, createBlog);
// router.put(
//   "/upload/:id",
//   authMiddleware,
//   isAdmin,
//   uploadPhoto.array("images", 2),
//   blogImgResize,
//   uploadImages
// );
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);

router.put("/updateblog/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);
router.get("/getAllBlogs", getAllBlogs);

router.delete("/deleteblog/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;