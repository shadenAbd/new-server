const exprees = require("express");
const router = exprees.Router();
const userRoute = require("./userRoute");
const categoryRoute = require("./categoryRoute");
const productRoute = require("./productRoute");
const NotificationRoute = require("./NotificationRoute");

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product" , productRoute);
router.use("/notification" , NotificationRoute);

module.exports = router;