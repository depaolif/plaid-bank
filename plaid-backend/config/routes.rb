Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/get_access_token', to: 'plaid#get_access_token'
  constraints subdomain: "hooks" do
    post '/' => 'webhooks#receive', as: :receive_webhooks
  end

end
