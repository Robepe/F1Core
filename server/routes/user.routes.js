const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );
};

// lo que habia en 'account.routes.js' (por si acaso)

/*module.exports = app => {
    const accounts = require("../controllers/account.controller.js");

    var router = require("express").Router();

    // Create a new Account
    router.post("/", accounts.create);

    // Retrieve all Accounts
    router.get("/", accounts.findAll);

    // Retrieve all admin Accounts
    router.get("/admin", accounts.findAllAdmin);

    // Retrieve a single Account with id
    router.get("/:id", accounts.findOne);

    // Update a Account with id
    router.put("/:id", accounts.update);

    // Delete an Account with id
    router.delete("/:id", accounts.delete);

    // Delete all Accounts
    router.delete("/", accounts.deleteAll);

    app.use('/api/accounts', router);
};*/