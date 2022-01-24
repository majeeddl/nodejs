const authors = [
  {
    id: 1,
    name: "majeed",
  },
  {
    id: 2,
    name: "john",
  },
  {
    id: 3,
    name: "ali",
  },
];

const books = [
  {
    id: 1,
    name: " book 1",
    authorId: 1,
  },
  {
    id: 2,
    name: " book 2",
    authorId: 2,
  },
  {
    id: 3,
    name: " book 3",
    authorId: 2,
  },
  {
    id: 4,
    name: " book 4",
    authorId: 3,
  },
];

// module.exports = {
//   books: books,
//   authors: authors,
// };

module.exports.books = books;

module.exports.authors = authors;
