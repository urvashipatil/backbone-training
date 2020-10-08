var TodoItemView = Backbone.View.extend({
  className: "card todo-item",
  template: _.template($("#tmpl-todo-item").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ todo: this.model.toJSON() }));
    return this;
  },
  events: {
    "click .delete": "deleteTodo",
    "click .bookmark ": "toggleBookMark",
    "dblclick .status": "toggleState",
    "click .edit": "showEditTodo"
  },
  showEditTodo: function(event) {
    todoFormView.model = this.model;
    todoFormView.isEdit = true;
    todoFormView.render();
  },
  toggleState: function(event) {
    //1st option - update todo and reset the entire collection
    //In this case we need to set data-id in html template
    // let todoId = $(event.target).data("id");
    // let tList = todos.toJSON().map(todo => {
    //   if (todo.id == todoId) {
    //     todo.completed = !todo.completed;
    //   }
    //   return todo;
    // });
    // todos.reset(tList);
    //OR

    //Option2 - toggle completed of current model. Listen change event in list view.
    this.model.set("completed", !this.model.get("completed"));
  },
  toggleBookMark: function(event) {
    this.model.set("book_marked", !this.model.get("book_marked"));
  },
  deleteTodo: function(e) {
    if (window.confirm("Are you sure you want to delete?")) {
      todos.remove(this.model);
    }
  }
});
