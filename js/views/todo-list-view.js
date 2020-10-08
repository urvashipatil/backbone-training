var TodoListView = Backbone.View.extend({
  el: "#todo-list",
  initialize: function() {
    this.listenTo(this.model, "add", newAddedTodo => {
      console.log("todo added", newAddedTodo);
      // this.render(); //This will render entire list view again
      //This is used to add only 1 row for newly added todo in the view
      let todoitemview = new TodoItemView({
        model: newAddedTodo
      }).render().$el;
      this.$el.prepend(todoitemview);
    });
    this.listenTo(this.model, "remove change", () => {
      this.render();
    });

    this.render();
  },
  render: function() {
    this.$el.html("");
    this.model.models.forEach(item => {
      let todoitemview = new TodoItemView({ model: item }).render().$el;
      this.$el.append(todoitemview);
    });
  }
});

var todoListView = new TodoListView({ model: todos });
