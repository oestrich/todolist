$(function() {
  Application.Models.Todo = Backbone.Model.extend({
  });

  Application.Collections.Todos = Backbone.Collection.extend({
    model: Application.Todo,
    url: "/my_todos"
  });
});
