import { Router } from 'express'
import signupController from '../controller/signup.controller'
const router = Router()

router.post('/create-account', signupController.signUpUser)

export default router