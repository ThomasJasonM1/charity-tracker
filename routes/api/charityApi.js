const router = require("express").Router();
const charityController = require("../../controllers/charityController");
const charityNav = require("../api/charityNav");

router.route("/").get(charityController.findAll).post(charityController.create);

router
	.route("/:id")
	.get(charityController.findById)
	.put(charityController.update)
	.delete(charityController.remove)
	.post(charityController.create);

router.route("/nav/:searchterm").get((req, res) => {
	charityNav
		.searchByName(req.params.searchterm)
		.then((response) => res.json(response.data))
		.catch((err) => console.log(err));
});

router.route("/nav/:ein").get((req, res) => {
	charityNav
		.searchByEin(req.params.ein)
		.then((response) => res.json(response.data));
});

module.exports = router;
