const Charity = require("../models/Charity");

module.exports = {
	findAll: (req, res) => {
		Charity.find(req.query)
			.sort({ ein: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: (req, res) => {
		Charity.findOne({ ein: req.params.ein })
			.then((dbModel) => {
				if (res) return res.json(dbModel);
				console.log(dbModel);
				return dbModel;
			})
			.catch((err) => res.status(422).json(err));
	},
	create: (req, res) => {
		Charity.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	update: (req, res) => {
		Charity.findOneAndUpdate({ ein: req.params.ein }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: (req, res) => {
		Charity.findOne({ ein: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
