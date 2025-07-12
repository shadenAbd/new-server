const categoryModel = require("../models/NotificationsModel");


const createNotification = (req, res) => {
    // const { AllCategories } = req.body;
  
     const Notification = req.body;
    
    categoryModel.create(Notification)
        .then((data) => {
            // console.log("data", data);
            res.status(200).json({
                message: " added successfully",
                data: data,
                success: true,
            });
        })
        .catch((err) => {
            console.log("err", err);
            res.status(500).json({
                message: "Error adding notification",
                error: err,
            });
        });
}

const TestNot = (req, res) => {
    res.status(200).json({
        message: " test",
        success: true,
    })
}

module.exports = {
    createNotification,
    TestNot
}

