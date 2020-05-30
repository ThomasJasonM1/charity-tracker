const router = require("express").Router();
const charityRoutes = require("./api");

// charity routes
router.use("/charity", charityRoutes);

module.exports = router;
