import express from 'express'
import movies from './data/movies.js'

const app = express()

app.use(express.json())

app.get('/movies', (req, res ) =>{
    res.status(200).json(movies)
})


app.get('/movies/:id', (req, res ) =>{
    const id = req.params.id
    if(id < 0 || id >= movies.length)
    {
        res.status(404).json({message: "Movie not found"})
    }
    res.status(200).json(movies[id])
})


app.post('/movies', (req, res ) =>{
    const {cim, rendezo, megjelnesEve, oszkardij} = req.body
    if(!cim || !rendezo || !megjelnesEve || !oszkardij){
        res.status(400).json({message: "Missing data"})
    }
    const newMovie = {cim, rendezo, megjelnesEve, oszkardij}
    movies.push(newMovie)
    res.status(201).json(newMovie)
})


app.put('/movies/:id', (req, res ) =>{
    const id = req.params.id
    if(id < 0 || id >= movies.length)
    {
        res.status(404).json({message: "Movie not found"})
    }
    const {cim, rendezo, megjelnesEve, oszkardij} = req.body
    if(!cim || !rendezo || !megjelnesEve || !oszkardij){
        res.status(400).json({message: "Missing data"})
    }
    movies[id] = {cim, rendezo, megjelnesEve, oszkardij}
    res.status(200).json(movies[id])
})


app.delete('/movies/:id', (req, res ) =>{
    const id = req.params.id
    if(id < 0 || id >= movies.length)
    {
        res.status(404).json({message: "Movie not found"})
    }
    movies.splice(id, 1)
    res.status(200).json({message: "Delete successful"})
})

app.listen(3000, ()=>{
    console.log('Server runs')
})