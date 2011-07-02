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
});
