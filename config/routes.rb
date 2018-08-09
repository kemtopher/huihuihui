Rails.application.routes.draw do

  root 'pages#index'
  
  get 'projects/new'
  get 'projects/create'
  get 'projects/update'
  get 'projects/edit'
  get 'projects/destroy'
  get 'projects/index'
  get 'projects/show'
  get 'projects/sort'

  devise_for :users

  resources :projects do
    collection do
      patch :sort 
    end
  end
  
  

end
