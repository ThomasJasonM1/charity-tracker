const router = require("express").Router();
const charityController = require("../../controllers/charityController");

router.route("/")
  .get(charityController.findAll)
  .post(charityController.create);

router
  .route("/:id")
  .get(charityController.findById)
  .put(charityController.update)
  .delete(charityController.remove);

module.exports = router;
