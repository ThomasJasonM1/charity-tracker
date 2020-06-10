const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
	findAll: (req, res) => {
		User.find(req.query)
			.sort({ _id: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: (req, res) => {
		User.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: (req, res) => {
		const {
			firstName,
			lastName,
			email,
			phone,
			image,
			username,
			password
		} = req.body;
		const newUser = {
			firstName,
			lastName,
			email,
			phone,
			image,
			username,
			password
		};

		newUser.password = bcrypt.hashSync(req.body.password, 10);

    User
      .create(newUser)
      .then((dbUser) => res.json({ status: "success" }))
      .catch(err => res.status(503).json(err));
  },
  update: (req, res) => {
    const { firstName, lastName, email, phone, image, username, password, passwordUpdated } = req.body;
    const updatedUser = { firstName, lastName, email, phone, image, username, password };

      if(passwordUpdated == true) 
        { updatedUser.password = bcrypt.hashSync(password, 10);}

		User.findOneAndUpdate({ _id: req.params.id }, updatedUser)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: (req, res) => {
		User.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	login: (req, res) => {
		User.findOne({ username: req.body.username })
			.then((dbUser) => {
				const hashedPw = dbUser.password;
				bcrypt.compare(req.body.password, hashedPw, (err, match) => {
					if (err) {
						console.log(err);
						res.status(503).send("Server error occured");
					}
					if (match) {
						res.json({
							// staus: "success",
							// name: dbUser.firstName + "" + dbUser.lastName,
							// email: dbUser.email
							dbUser
						});
					} else {
						res.status(401).send("Unauthorized");
					}
				});
			})
			.catch((err) => res.status(503).json(err));
	}
};
