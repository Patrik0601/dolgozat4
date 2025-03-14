import express, { Router } from "express";
import * as controllerMovies from '../controlls/controllersMovie.js'

const router = express.Router()

router.get('/movies', controllerMovies.getAllMoives)

router.get('/movie/:id', controllerMovies.getMovieByID)

router.push('/movie/', controllerMovies.newMovie)

router.put('/movie/:id', controllerMovies.updateMovie)

router.delete('/movie/:id', controllerMovies.deleteMovie)

export default router