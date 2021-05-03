const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    preparation: {
        type: Array,
        required: true
    }
})

const recipeSchema = mongoose.model("recipesModel", recipesSchema)

module.exports = {recipeSchema}