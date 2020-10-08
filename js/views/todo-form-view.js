var TodoFormView = Backbone.View.extend({
  el: "#todo-form",
  template: _.template($("#tmpl-todo-form").html()),
  isEdit: false,
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(
      this.template(this.model ? this.model.toJSON() : { title: "" })
    );
  },
  events: {
    "submit #frmTodo": "addTodo"
  },
  addTodo: function(e) {
    e.preventDefault();
    if (this.isEdit) {
      //Edit Todo
      this.model.set("title", $("#title").val());
      this.isEdit = false;
    } else {
      //Add new Todo
      let newTodo = new Todo();
      newTodo.set("id", +new Date());
      newTodo.set("title", $("#title").val());
      todos.unshift(newTodo);
    }

    $("#title").val("");
  }
});

var todoFormView = new TodoFormView(new Todo());
