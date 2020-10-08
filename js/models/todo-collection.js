var TodoList = Backbone.Collection.extend({
  model: Todo
});

var todos = new TodoList([
  new Todo({
    id: 1,
    title: "Learn Elm",
    completed: true,
    percentage_completed: 100,
    book_marked: false
  }),
  new Todo({
    id: 2,
    title: "Learn GoLang",
    completed: false,
    percentage_completed: 25,
    book_marked: false
  }),
  new Todo({
    id: 3,
    title: "Learn Rust",
    completed: false,
    percentage_completed: 75,
    book_marked: false
  }),
  new Todo({
    id: 4,
    title: "Learn to build a compiler",
    completed: false,
    percentage_completed: 20,
    book_marked: false
  })
]);
