Rails.application.routes.draw do
  get 'puntuacions/recarregar'
  get 'puntuacions/esborrar'
  get 'puntuacions/esborrar_tot'
  get 'puntuacions/grava_puntuacio'
  get 'home/espera'
  get 'taller2', to: 'home#taller2', as: :taller2
  get 'talleracasa', to: 'home#talleracasa', as: :talleracasa
  get 'casa', to: 'home#casa', as: :casa
  get 'video', to: 'home#video', as: :video
  get 'home/index'
  get 'fases/canvi_fase_2'
  get 'fases/canvi_fase'
  resources :puntuacions
  resources :estats
  resources :missatges
  devise_for :users
  root to: 'home#index'
end
