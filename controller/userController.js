const UserModel = require("../models/UserModel");

const addUser = (req, res) => {
    const { name, password, phone } = req.body;
    UserModel.create({
        name,
        password,
        phone,
    })
        .then((data) => {
            console.log("data", data);
            res.status(200).json({
                message: "User added successfully",
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

const getUser = (req, res) => {
    const { phone } = req.body
    UserModel.findOne({ phone }).then((data) => {
        console.log("data", data);
        res.status(200).json({
            message: "User added successfully",
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

const deleteUser = (req, res) => {
    const { phone } = req.body
    UserModel.deleteOne({ phone: phone })
        .then((data) => {
            console.log("data", data);
            res.status(200).json({
                message: "User deleted successfully",
                data: data,
                success: true,
            });
        })
        .catch((err) => {
            console.log("err", err);
            res.status(500).json({
                message: "Error deleting user",
                error: err,
            });
        });
}

module.exports = {
    addUser,
    getUser,
    deleteUser
}