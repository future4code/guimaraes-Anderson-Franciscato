import express from 'express'
import { UserController } from '../controller/UserController'
import { GetUsersController } from '../controller/GetUsersController'

export const userRouter = express.Router()
export const getUsersRouter = express.Router()

const userController = new UserController()
const getUsersController = new GetUsersController()

userRouter.post("/create", userController.create)
getUsersRouter.get("/getUsers", getUsersController.getAll)

