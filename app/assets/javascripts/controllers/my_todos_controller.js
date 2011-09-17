$(function() {
  Application.Controllers.MyTodos = Backbone.Router.extend({
    routes: {
      "":             "index",
      "my_todos/:id": "show"
    },

    index: function() {
      this.loadJson();
      this.renderIndex();
    },

    show: function(id) {
      this.loadJson();
      var todo = Application.Todos.get(id);
      var view = new Application.Views.Todo({model: todo});
      view.render();
    },

    renderIndex: function () {
      var view = new Application.Views.Todos({collection: Application.Todos});
      $('.todos').html(view.render().el);
    },
    
    loadJson: function() {
      if (Application.Todos == null) {
        Application.Todos = new Application.Collections.Todos(Application.Data.Todos);
        Application.Todos.bind('add', this.renderIndex, this);
      }
    }
  });
});
