/** @format */

import express from "express";
import {
  register,
  login,
  addNewAdmin,
  getAllDoctors,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
  addNewDoctor,
  forgotPassword,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", register);
router.post("/patient/forgotPassword", forgotPassword);
router.post("/login", login);
router.post("/admin/addNew", isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addNew", isAdminAuthenticated, addNewDoctor);

export default router;
