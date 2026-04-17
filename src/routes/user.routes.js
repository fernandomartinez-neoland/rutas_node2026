import express from 'express'
const router = express.Router();
export default router
router.post('/perfil', (req, res) => {
    res.send("esta es la ruta perfil");
})



