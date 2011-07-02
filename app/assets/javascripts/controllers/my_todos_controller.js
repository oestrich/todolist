Application.Controllers.MyTodos = Backbone.Router.extend({
  routes: {
    "": "index",
    "my_todos/:id": "show"
  },

  index: function() {
    this.loadJson();
    this.navigate(Application.Todos.first().url());
  },

  show: function(id) {
    this.loadJson();
    var todo = Application.Todos.get(id);
    console.log(todo.get("message"));
    console.log(todo.get("due"));
  },

  loadJson: function() {
    Application.Todos = new Application.Collections.Todos();
    Application.Todos.reset(Application.Data.Todos);
  }
});
