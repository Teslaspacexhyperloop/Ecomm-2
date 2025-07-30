import express from "express";
// import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";
import { categoryController, categoryPhotoController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categorycontroller.js";
import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const Router=express.Router();

Router.post('/create-category',requireSignIN,isAdmin,formidable(),createCategoryController);

Router.put('/update-category/:id',requireSignIN,isAdmin,formidable(),updateCategoryController);

Router.get('/get-category',categoryController);

Router.get('/single-category/:slug',singleCategoryController);

//get photo
Router.get("/category-photo/:id", categoryPhotoController);

Router.delete('/delete-category/:id',requireSignIN,isAdmin,deleteCategoryController);



export default Router;