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
    initialize: function() {
      // var self = this;
      // this.collection.bind("add", function() {
      //   console.log("Added");
      //   self.render();
      // });
    },
    events: {
      "click form button": "addNew"
    },
    render: function() {
      var self = this;
      $(self.el).empty();
      this.collection.each(function(todo) {
        var view = new Application.Views.Todo({model: todo});
        $(self.el).append(view.render().el);
      });

      $(self.el).append(_.template($("#new_todo").html()));

      return this;
    },
    addNew: function(ev) {
      ev.preventDefault();
      var message = this.$("#todo").val();
      var date = this.$("#due_date").val();
      var model = this.collection.create({message: message, due: date});
      this.collection.add(model);
    }
  });
});
