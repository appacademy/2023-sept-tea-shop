Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :teas, only: [:show, :index, :create, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end

  # purpose of this route is to serve up our frontend
  get '*path',
    to: 'static_pages#frontend',
    constraints: lambda { |req| !req.xhr? && req.format.html? }

  root 'static_pages#frontend', 
    constraints: lambda { |req| !req.xhr? && req.format.html? }
end
