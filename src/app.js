import express from 'express'
import indexroutes from './routes/indexroutes.js' 
import  productroutes  from './routes/productroutes.js'
const app = express()
app.use(express.json())

app.use(indexroutes)
app.use(productroutes)
app.use((req, res) =>{
    res.status(404).json
    ({ ok:false, 
        error:{message:"Ruta no encontrada" 
    }})
})


export default app  