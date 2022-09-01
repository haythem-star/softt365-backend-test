const router = require('express').Router();
const {calculate,calculFondsPropres} = require('../controllers/gestionFond.controller')

router.post('/calculate',calculate);
router.post('/fondsPropres',calculFondsPropres);






module.exports = router