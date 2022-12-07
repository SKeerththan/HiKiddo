const express = require('express')
const router = express.Router();



const  AdminController = require('../controllers/AdminController')
router.get('/show',AdminController.getAllAdmin)
router.post('/store',AdminController.addAdmin)
router.put('/update',AdminController.updatAdmin)
router.delete('/destroy',AdminController.destroyAdmin)



module.exports= router
