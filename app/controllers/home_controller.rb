class HomeController < ApplicationController
  expose(:todos) { MyTodo.all }

  def index
  end
end
