Rails.application.routes.draw do
  # get 'projects/new'
  # get 'projects/create'
  # get 'projects/update'
  # get 'projects/edit'
  # get 'projects/destroy'
  # get 'projects/index'
  # get 'projects/show'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects
  root 'pages#index'

  get 'my_image_url', to: 'pages#my_image_url'
  # root 'projects#new'
end
