import express from "express";
import {
  loginController,
  registerController,
  testController,
  forgotPasswordController,
  UpdateProfileController,
  GetOrdersController,
  GetAllOrdersController,
  OrderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();
// register routes
router.post("/resgister", registerController);
// login routes
router.post("/login", loginController);
//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
// protected user routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected user routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update user route
router.put("/profile", requireSignIn, UpdateProfileController);

//get orders
router.get("/orders", requireSignIn, GetOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, GetAllOrdersController);

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  OrderStatusController
);

export default router;
