Rails.application.routes.draw do
  scope '(:locale)', locale: /en|uk/ do
    root 'campaigns#index'
    resources :contacts, only: %i[show edit update]
    devise_for :users, controllers: { registrations: 'users/registrations' }
    resources :campaigns
    resources :news
  end
end
