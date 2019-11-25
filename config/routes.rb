Rails.application.routes.draw do
  get "forms/new"
  post "forms/create" #投稿を保存するためにhttpメソッドはPOST
  root "forms#index"
end
