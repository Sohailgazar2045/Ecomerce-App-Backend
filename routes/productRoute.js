import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  BrainteeTokenController,
  BraintreePaymentController,
  CreateProductController,
  DeleteProductController,
  GetProductController,
  GetProductPhotoController,
  GetSingleProductController,
  ProductCatagorySlug,
  ProductCountController,
  ProductFiltersController,
  ProductListController,
  RelatedProductController,
  SearchProductController,
  UpdateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// cretae product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  CreateProductController
);
// update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  UpdateProductController
);
// get products
router.get("/get-products", GetProductController);
// get single product
router.get("/get-product/:slug", GetSingleProductController);
// get photo
router.get("/product-photo/:pid", GetProductPhotoController);
// delete product
router.delete("/delete-product/:pid", DeleteProductController);
//filter product
router.post("/product-filters", ProductFiltersController);
//product count
router.get("/product-count", ProductCountController);
//product per page
router.get("/product-list/:page", ProductListController);
//search product
router.get("/search/:keyword", SearchProductController);
//similar product
router.get("/related-product/:pid/:cid", RelatedProductController);
// product catagory route
router.get("/product-catagory/:slug", ProductCatagorySlug);
// braintree token gateway
// geting token
router.get("/braintree/token", BrainteeTokenController);
// payment
router.post("/braintree/payment", requireSignIn, BraintreePaymentController);
export default router;
