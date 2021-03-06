const validator = require('email-validator')
module.exports = {
    checkRecipe: async (req, res, next) => {
        function error(status, message) {
            return res.send({error: status, message: message})
        }
        if (req.body.title.length < 5) {
            return error(true, 'Title is too short!')
        }
        if (req.body.images.length < 1) {
            return error(true, 'Add an image!')
        }
        if (req.body.ingredients.length < 1) {
            return error(true, 'Add some ingredients!')
        }
        if (req.body.preparation.length < 1) {
            return error(true, 'You forgot to add preparation steps!')
        }
        next()
    },
    checkReview: async (req, res, next) => {
        let validEmail = validator.validate(req.body.email)
        if (req.body.comment.length > 50 || req.body.comment.length < 5) {
            return res.send({error: true, message: 'Review must be 5-50 characters long'})
        }
        if (validEmail) {
            return next()
        }
        if (!validEmail) {
            return res.send({error: true, message: 'Invalid email'})
        }
        next()
    },

}