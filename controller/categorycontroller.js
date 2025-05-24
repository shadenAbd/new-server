const categoryModel = require("../models/categorymodel");


const createManyCategories = (req, res) => {
    // const { AllCategories } = req.body;
    categoryModel.insertMany(req.body)
        .then((data) => {
            console.log("data", data);
            res.status(200).json({
                message: " added successfully",
                data: data,
                success: true,
            });
        })
        .catch((err) => {
            console.log("err", err);
            res.status(500).json({
                message: "Error adding user",
                error: err,
            });
        });
}

const Test = (req, res) => {
    res.status(200).json({
        message: " test",
        success: true,
    })
}

module.exports = {
    createManyCategories,
    Test
}

