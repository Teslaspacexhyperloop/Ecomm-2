import slugify from "slugify";
import categorymodel from "../models/categorymodel.js";
import fs from "fs";

export const createCategoryController=async(req,res) =>{
try {
    const {name}=req.fields;
    const {photo}=req.files;
    switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
    case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const existingCategory=await categorymodel.findOne({name});
    if(existingCategory){
        return res.status(200).send({
            success:true,
            message:"category already exist"
        })
    }

    const category = new categorymodel({ ...req.fields, slug:slugify(name) });
    if (photo) {
      category.photo.data = fs.readFileSync(photo.path);
      category.photo.contentType = photo.type;
    }
    await category.save();
    res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating Category",
    });
  }



}


export const updateCategoryController=async(req,res) =>{
    try{
        const {name}=req.fields;
        const {id}=req.params;
        const {photo}=req.files;
        // The line const { id } = req.params; is extracting the id parameter from the request parameters.

        const category = await categorymodel.findByIdAndUpdate(
            id,
            { ...req.fields, slug: slugify(name) },
            { new: true }
          );
          if (photo) {
            category.photo.data = fs.readFileSync(photo.path);
            category.photo.contentType = photo.type;
          }
          await category.save();
          res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            category,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            error,
            message: "Error in Update Category",
          });
        }

}


export const categoryController=async(req,res) =>{
    try {
        const category=await categorymodel.find({}).select("-photo");
        return res.status(201).send({
            success:true,
            message:'all categories list',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in get-category"
        })
    }
}

export const singleCategoryController=async(req,res) =>{
try {
    
    const category=await categorymodel.findOne({slug:req.params.slug});
    // Define a route with a parameter 'slug'
// app.get('/category/:slug', getCategoryController);
// In this example, the route /category/:slug expects a parameter slug in the URL. When a request is made to this route, Express will parse the URL and make the value of slug available in req.params.
    return res.status(201).send({
        success:true,
        message:'get single category',
        category
    })
    
} catch (error) {
    console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in single-category"
        })
}
}

export const deleteCategoryController=async(req,res) =>{
    try {
        const {id}=req.params;
        await categorymodel.findByIdAndDelete(id);
        return res.status(201).send({
            success:true,
            message:'delete single category',
           
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in delete single-category"
        })
        
    }
}

export const categoryPhotoController=async (req,res) =>{
  try {
    const category = await categorymodel.findById(req.params.id).select("photo");
    if (category.photo.data) {
      res.set("Content-type", category.photo.contentType);
      return res.status(200).send(category.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
}