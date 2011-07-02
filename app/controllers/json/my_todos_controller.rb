class Json::MyTodosController < ApplicationController
  expose(:todos) { MyTodo.all }

  def index
    render :json => todos
  end
end
