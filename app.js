import express from 'express'
import routes from '../routes/routesMovie.js'

const app = express()

app.use(express.json())
app.use('/', routesMovie)

app.listen(3000, ()=>{
    console.log('Server runs')
})