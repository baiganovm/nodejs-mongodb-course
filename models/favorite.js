const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteDishesSchema = new Schema({
    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
});


const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [favoriteDishesSchema]
}, {
    timestamps: true,
    usePushEach: true
});

const Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;