const express = require('express');
const { getNFTMetadata } = require('../controllers/testController');
const router = express.Router();

const {
    isAuthenticatedUser,
    authorizeRoles,
  } = require("../middlewares/user_actions/auth");
  


router.post('/metadata', (req, res) => {
    //console.log('Received POST request for /metadata');
    console.log('Request Body:', req.body);
    getNFTMetadata(req, res);
});

module.exports = router;