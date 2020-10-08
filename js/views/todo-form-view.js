var TodoFormView = Backbone.View.extend({
  el: "#todo-form",
  template: _.template($("#tmpl-todo-form").html()),
  events: {
    "submit #frmTodo": "addTodo"
  },
  addTodo: function(e) {
    e.preventDefault();
    let newTodo = new Todo();
    newTodo.set("id", +new Date());
    newTodo.set("title", $("#title").val());
    todos.unshift(newTodo);

    $("#title").val("");
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  }
});

var todoFormView = new TodoFormView();
