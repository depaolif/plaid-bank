Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/get_access_token', to: 'plaid#get_access_token'
  # match '/get_access_token', :controller => 'plaid', :action => 'options', :constraints => {:method => 'OPTIONS'}

end
