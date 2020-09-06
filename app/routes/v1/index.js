var express = require('express');
var router = express.Router();

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

module.exports = router;


// GET 	/api/v1/article 	liste de article
// GET 	/api/v1/article/:id 	:id un article
// POST 	/api/v1/article         poster
// DELETE 	/api/v1/article/:id 	:id delete
// GET 	/api/v1/user:/ 	        liste de user
// GET 	/api/v1/user:/id 	:id un user
// POST 	/api/v1/user/ 	        post new user
// PUT 	/api/v1/user/:id 	:id update user