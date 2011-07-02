Application.Controllers.MyTodos = Backbone.Router.extend({
  routes: {
    "": "index",
    "my_todos/:id": "show"
  },

  index: function() {
    this.navigate(Application.Todos.first().url());
  },

  show: function(id) {
    console.log(id);
  }
});
