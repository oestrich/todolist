class Json::MyTodosController < ApplicationController
  expose(:todos) { MyTodo.all }
  expose(:my_todo)

  def index
    render :json => todos
  end

  def create
    if my_todo.save
      head :ok
    end
  end
end
