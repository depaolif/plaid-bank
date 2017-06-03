class PlaidController < ApplicationController
	def get_access_token
		# get access token from public token, no need to store public token, as it's a one-time use
		# must store access token and item id
		response = $client.item.public_token.exchange(params["public_token"])
		session["access_token"] = response["access_token"]
		session["item_id"] = response["item_id"]
		accounts_info = get_auth
		render json: accounts_info
	end

	private

	def get_auth
		$client.auth.get(session["access_token"])
	end

end
