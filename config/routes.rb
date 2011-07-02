Todo::Application.routes.draw do
  namespace :json do
    resources :my_todos, :only => :index
  end

  match "/my_todos" => "home#index"
  match "/my_todos/:id" => "home#index"

  root :to => "home#index"
end
