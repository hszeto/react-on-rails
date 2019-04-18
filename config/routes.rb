Rails.application.routes.draw do
  root to: 'welcome#index'

  get '/hello',   to: 'welcome#index'
  get '/private', to: 'welcome#index'
  get '/public',  to: 'welcome#index'
end
