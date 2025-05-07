const exprees = require("express");
const router = exprees.Router();
const userRoute = require("./userRoute");
router.use("/user", userRoute);

module.exports = router;