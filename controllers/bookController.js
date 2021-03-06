const db = require("../models");

//define methods
module.exports = {
    //findAll
    findAll: function (req, res) {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },

    //findbyId
    findById: function (req, res) {
        db.Book.find(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },

    //create (to do)
    create: function (req, res) {
        db.Book.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },

    //update (to do)
    update: function(req, res) {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },

    //delete a book based off id
    delete: function (req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
}