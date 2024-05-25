const User = require("../../models/userModel/userModel");
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.createUser = async (req, res, next) => {
    try {
        console.log("Creating user...");
        const newUser = await User.create(req.body);
        console.log("User created:", newUser);

        const token = signToken(newUser._id);
        console.log("Token generated:", token);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        });
    }
};


exports.login = async(req, res, next) => {
    const {email, password} = req.body;

    console.log("Logging in user...");
    console.log("Email:", email);

    if (!email || !password) {
        return res.status(400).json({ message: "Veuillez saisir l'email et le mot de passe." });
    }

    const user = await User.findOne({email}).select('+password');

    console.log("User found:", user);

    if(!user || !(await user.correctPassword(password, user.password))) {
        console.log("Invalid email or password.");
        return res.status(401).json({ message: "l'email ou le mot de passe est incorrect" });
    }

    const token = signToken(user._id); 
    console.log("Token generated:", token);

    res.status(200).json({
        status: 'success',
        token, 
        data: {
            User: user
        }
    });
}

exports.authenticate = async (req, res, next) => {
    try {
        // Vérifier si le token est présent dans le header Authorization
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            return res.status(401).json({ message: 'Unauthorized, Please login to get acces' });
        }

        // Extraire le token du header Authorization
        const token = req.headers.authorization.split(' ')[1];

        // Vérifier la validité du token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Vérifier si l'utilisateur existe
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized, the user does not exist' });
        }

        // Ajouter l'utilisateur au corps de la requête pour une utilisation ultérieure
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
