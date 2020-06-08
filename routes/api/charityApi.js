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
			const dbResponse = response[1];

			const allResultObj = {
				fromCharityNav: {
					name: navResponse.charityName,
					missionStatement: navResponse.mission,
					tagline: navResponse.tagline,
					orgWebsite: navResponse.websiteURL,
					email: navResponse.generalEmail,
					phone: navResponse.phoneNumber,
					navWebsite: navResponse.charityNavigatorURL,
					category: navResponse.category.categoryName,
					categoryImage: navResponse.category.image,
					cause: navResponse.cause.causeName,
					causeImage: navResponse.cause.image,
					deductibility: navResponse.irsClassification.deductibility,
					irsClassification:
						navResponse.irsClassification.classification,
					score: navResponse.currentRating.score,
					rating: navResponse.currentRating.rating,
					starRatingImage: navResponse.currentRating.ratingImage.large
				},
				fromDB: dbResponse
			};

			res.json(allResultObj);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
