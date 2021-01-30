/* GET home page. */
const index = function (req, res, next) {
    res.render('index', { title: 'Rajith V Gopal!!' });
};
module.exports = {
    index
};