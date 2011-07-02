Todo::Application.routes.draw do
  resources :my_todos, :only => :index

  root :to => "home#index"
end
