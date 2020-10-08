var TodoListView = Backbone.View.extend({
  el: "#todo-list",
  initialize: function() {
    this.listenTo(this.model, "add", () => {
      this.render();
    });
    this.listenTo(this.model, "reset", () => {
      this.render();
    });

    this.render();
  },
  render: function() {
    this.$el.html("");
    this.model.toJSON().forEach(item => {
      console.log(item.title);
      let todoitemview = new TodoItemView({ model: item }).render().$el;
      this.$el.append(todoitemview);
    });
  }
});

var todoListView = new TodoListView({ model: todos });
