const router = require("express").Router();
const charityRoutes = require("./charityApi");
const userRoutes = require("./userApi")


// charity routes
router.use("/charity", charityRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
