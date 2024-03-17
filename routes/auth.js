import express from 'express'
import { login, register } from '../controllers/authController.js';



const router = express.Router()

//create new tour
router.post("/register", register);
//update tour
router.post("/login", login);

export default router;