var TodoItemView = Backbone.View.extend({
  template: _.template($("#tmpl-todo-item").html()),
  events: {
    "click .delete": "deleteTodo"
  },
  deleteTodo: function(e) {
    // alert($(e.target).data("id"));
    let newTodos = todos.filter(item => {
      return item.id != $(e.target).data("id");
    });

    todos.reset(newTodos);
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ todo: this.model }));
    return this;
  }
});
