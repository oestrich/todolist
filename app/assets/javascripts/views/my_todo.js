$(function() {
  Application.Views.Todo = Backbone.View.extend({
    className: "todo",
    tagName: "li",
    template: _.template($("#my_todo_template").html()),

    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));

      return this;
    }
  });

  Application.Views.Todos = Backbone.View.extend({
    render: function() {
      this.model.each(function(todo) {
        var view = new Application.Views.Todo({model: todo});
        $(".todos").append(view.render().el);
      });

      return this;
    }
  });
});
