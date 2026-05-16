import express from 'express'
const router = express.Router()

router.get('/api/health', (req,res) =>{
    res.json({ 
    data: {status: "healthy"},
    uptime: process.uptime(),
    timestamp: new Date(), 
  })
})

export default router