const exprees = require("express");
const router = exprees.Router();
const userRoute = require("./userRoute");
const categoryRoute = require("./categoryRoute");
router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router;