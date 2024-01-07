const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/login",
        [
            verifySignUp.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );

    // signin
    app.post("/", controller.signin);

    // signout
    app.post("/layout/dashboard", controller.signout);
};
