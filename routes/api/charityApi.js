const router = require("express").Router();
require("dotenv").config();
const Charity = require("../../models/Charity");
const charityController = require("../../controllers/charityController");
const charityNav = require("../api/charityNav");

router.route("/").get(charityController.findAll).post(charityController.create);

router
	.route("/:ein")
	.get(charityController.findById)
	.put(charityController.update)
	.delete(charityController.remove)
	.post(charityController.create);

router.route("/nav/name/:searchterm").get((req, res) => {
	charityNav
		.searchByName(req.params.searchterm)
		.then((response) => res.json(response.data))
		.catch((err) => console.log(err));
});

router.route("/nav/ein/:ein").get((req, res) => {
	charityNav
		.searchByEin(req.params.ein)
		.then((response) => res.json(response.data))
		.catch((err) => console.log(err));
});

router.route("/dbnav/:ein").get((req, res) => {
	const apiCalls = [
		charityNav.searchByEin(req.params.ein),
		Charity.findOne({ ein: req.params.ein })
	];

	return Promise.all(apiCalls)
		.then((response) => {
			const navResponse = response[0].data;
			const dbResponse = response[0].data;

			const allResultObj = {
				nav: navResponse,
				db: dbResponse
			};

			res.json(allResultObj);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
