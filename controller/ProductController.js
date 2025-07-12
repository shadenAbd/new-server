const categoryModel = require("../models/ProductModel");


const createManyProducts = (req, res) => {
    // const { AllCategories } = req.body;
    const prudacts = req.body.map((p)=>{
        p.category=p.category.name
        p.flashSale = true;

        return p
    })

    categoryModel.insertMany(prudacts)
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
                message: "Error adding user",
                error: err,
            });
        });
}

const createOneProduct = (req, res) => {
    // const { AllCategories } = req.body;
  
     const product = req.body;

    categoryModel.create(product)
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
    createManyProducts,
    Test,
    createOneProduct,
}

