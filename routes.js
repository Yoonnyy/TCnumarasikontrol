const router = require("express").Router();
const controllers = require("./controllers/controllers");

router.route("/")
	.get(controllers.index)

router.route("/search")
	.post(controllers.search);

module.exports = router;
