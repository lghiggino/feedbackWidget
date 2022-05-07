import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express()

app.use(express.json())
app.use(cors())
//{ origin: 'http://localhost:3000' }
app.use(routes)

app.listen(3333, () => {
    console.log('HTTP server running')
})