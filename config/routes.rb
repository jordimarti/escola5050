Rails.application.routes.draw do
  get 'puntuacions/recarregar'
  get 'puntuacions/esborrar'
  get 'puntuacions/esborrar_tot'
  get 'puntuacions/grava_puntuacio'
  get 'home/espera'
  get 'video', to: 'home#video', as: :video
  get 'home/index'
  get 'fases/canvi_fase'
  resources :puntuacions
  resources :estats
  resources :missatges
  devise_for :users
  root to: 'home#index'
end
