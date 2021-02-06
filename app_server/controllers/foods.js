const foodlist = function (req, res, next) {
    res.render('foodlist', { title: 'FoodList' });
};

const myfavouriteFood = function (req, res, next) {
    res.render('myfavourite-food', { title: 'My Favourite Food' });
};
module.exports = {
    foodlist,
    myfavouriteFood
};