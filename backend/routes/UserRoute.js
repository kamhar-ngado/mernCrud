import express from "express";
import { getUsers } from "../controllers/userControllers";

const router = express.Router();

// parsing getUsers from userControllers.js
router.get("/users", getUsers);


export default router;
