class MyTodoController < ApplicationController
  expose(:todos) { Todo.all }

  def index
    render :json, todos
  end
end
