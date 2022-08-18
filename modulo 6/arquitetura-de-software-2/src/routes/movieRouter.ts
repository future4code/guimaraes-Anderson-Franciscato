import express from 'express'
import { MovieController } from "../controller/MovieController";

export const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.post("/createMovie", movieController.create);
movieRouter.get("/getMovies", movieController.getMovie);
