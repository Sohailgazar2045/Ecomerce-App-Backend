import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  CreateCatagoryController,
  DeleteCatagoryController,
  GetAllCatagoryController,
  GetSingleCatagory,
  UpdateCatagoryController,
} from "../controllers/catagoryController.js";

const router = express.Router();

// create catagory
router.post(
  "/create-catagory",
  requireSignIn,
  isAdmin,
  CreateCatagoryController
);
// update category
router.put(
  "/update-catagory/:id",
  requireSignIn,
  isAdmin,
  UpdateCatagoryController
);
// get all catagory
router.get("/get-catagory", GetAllCatagoryController);
// get single catagory
router.get("/single-catagory/:slug", GetSingleCatagory);
// delete catagory
router.delete(
  "/delete-catagory/:id",
  requireSignIn,
  isAdmin,
  DeleteCatagoryController
);

export default router;
