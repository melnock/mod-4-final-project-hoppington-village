Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :animals, :items, :outfits, :pets, :users
    end
  end

  post '/sessions/', to: 'sessions#create'

end
