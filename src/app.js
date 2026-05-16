import express from 'express'
import indexroutes from './routes/indexroutes.js' 

const app = express()
app.use(express.json())

app.use(indexroutes)
app.use((req, res) =>{
    res.status(404).json
    ({ ok:false, 
        error:{message:"Ruta no encontrada" 
    }})
})


export default app  