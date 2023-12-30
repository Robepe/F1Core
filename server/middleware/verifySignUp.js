const db = require("../models");
const Account = db.accounts;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    Account.findOne({
        where: {
            username: req.body.username
        }
    }).then(account => {
        if (account) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        // Email
        Account.findOne({
            where: {
                email: req.body.email
            }
        }).then(account => {
            if (account) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;