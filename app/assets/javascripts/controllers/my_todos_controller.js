$(function() {
  Application.Controllers.MyTodos = Backbone.Router.extend({
    routes: {
      "":             "index",
      "my_todos/:id": "show"
    },

    index: function() {
      this.loadJson();
      var view = new Application.Views.Todos({model: Application.Todos});
      $(".todos").append(view.render().el);
    },

    show: function(id) {
      this.loadJson();
      var todo = Application.Todos.get(id);
      var view = new Application.Views.Todo({model: todo});
      $(".todos").append(view.render().el);
    },

    loadJson: function() {
      if (Application.Todos == null) {
        Application.Todos = new Application.Collections.Todos();
        Application.Todos.reset(Application.Data.Todos);
      }
    }
  });
});
