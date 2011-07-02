Todo::Application.routes.draw do
  namespace :json do
    resources :my_todos, :only => :index
  end

  match "*path" => "home#index"

  root :to => "home#index"
end
