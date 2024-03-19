let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  BookInstance.find({status: 'Available'})
    .populate('book')
    .exec()
    .then(list_bookinstances => {
      res.send(list_bookinstances.map(function(bookinstance){
        return BookInstance.book.title + " : " + BookInstance.status;
      }));
    })
    .catch(err => {res.send('Status not found ')});
}