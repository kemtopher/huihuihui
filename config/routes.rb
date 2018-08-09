Rails.application.routes.draw do
  # get 'projects/new'
  # get 'projects/create'
  # get 'projects/update'
  # get 'projects/edit'
  # get 'projects/destroy'
  # get 'projects/index'
  # get 'projects/show'

  devise_for :users
  resources :projects
  root 'pages#index'

end
