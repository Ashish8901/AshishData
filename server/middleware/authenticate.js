const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(
            token,
            (SECRET_KEY = "MYNAMEISASHISHPARMARANDTHISISMYMERNPROJECT")
        );

        const rootUser = await User.findOne({
            _id: verifyToken._id,
            "tokens.token": token,
        });

        if (!rootUser) {
            throw new Error("user not found");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        console.log(err);
    }
};

module.exports = Authenticate;