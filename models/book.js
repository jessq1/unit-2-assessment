import mongoose from 'mongoose'

export {
  Book
}

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: true
  })
  
  const Book = mongoose.model('Book', bookSchema)