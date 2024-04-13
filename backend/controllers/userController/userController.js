const User = require("../../models/userModel/userModel");
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.createUser = async(req, res, next) => {
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token, 
        data: {
            User: newUser
        }
    });
}  

exports.login = async(req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Veuillez saisir l'email et le mot de passe." });
    }

    const user = await User.findOne({email}).select('+password');

    if(!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({ message: "l'email ou le mot de passe est incorrect" });
    }

    const token = signToken(user._id); 

    res.status(200).json({
        status: 'success',
        token, 
        data: {
            User: user
        }
    });
}