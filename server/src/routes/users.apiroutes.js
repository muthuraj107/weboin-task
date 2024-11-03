const express = require("express");
const router = express.Router();

const user=require('../controllers/users.controllers')

router.get('/user/data',user.data)

router.post('/user/post',user.create)

router.delete('/user/dlt/:id',user.delete)


module.exports = router;