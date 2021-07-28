import { Book } from '../models/book.js'

export {
    index,
    newBook as new,
    create,
    deleteBook as delete
  }

  function deleteBook(req,res){
    Book.findByIdAndDelete(req.body.id, function(err, book) {
        res.redirect('/books')
      })
  }

  function index(req, res) {
    Book.find({}, function(err, books) {
      res.render('books/index', {
        books: books,
        title: 'Unit 2 Assessment'
      })
    })
  }

  function newBook(req, res) {
    res.render('books/new', {
      title: "Add a Book"
    })
  }

  function create(req, res) {
    req.body.read = !!req.body.read
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const book = new Book(req.body)
    book.save(function(err) {
      if (err) {
        console.log(err)
        return res.redirect('/books/new')
      }
      res.redirect(`/books`)
    })
  }