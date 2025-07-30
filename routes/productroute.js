import express from "express";

// import formidable from "express-formidable";
import formidable from "express-formidable";
import {
  brainTreeController,
  brainTreePaymentController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productcontroller.js";
import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIN,
  isAdmin,
  formidable(),
  // formidable parses incoming multipart/form-data requests and populates req.fields and req.files.
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIN,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

router.get("/braintree/token", brainTreeController);

router.post("/braintree/payment", requireSignIN, brainTreePaymentController);

export default router;
