var express = require('express');
var router = express.Router();
var movieModule=require("../modules/movieModule")


router.get('/',movieModule.getMovie)
router.post("/create",movieModule.postMovie)
router.put("/update/:id",movieModule.updateMovie)
router.delete("/delete/:id",movieModule.deleteMovie)


module.exports = router;