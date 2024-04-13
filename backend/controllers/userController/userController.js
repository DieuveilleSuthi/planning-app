const User = require("../../models/userModel/userModel");

exports.createUser = async(req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newUser
        }
    });
}