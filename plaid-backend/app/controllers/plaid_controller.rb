class PlaidController < ApplicationController
	def get_access_token
		# get access token from public token, no need to store public token, as it's a one-time use
		# must store access token and item id
		response = $client.item.public_token.exchange(params["public_token"])
		session["access_token"] = response["access_token"]
		session["item_id"] = response["item_id"]
		accounts_info = get_auth
		transactions_info = get_transactions
		render json: {accounts_info: accounts_info, transactions_info: transactions_info}
	end

	private

	def get_auth
		$client.auth.get(session["access_token"])
	end

	def get_transactions
		sleep(30) # waiting for the Item to be ready to have transactions pulled
		transaction_response = $client.transactions.get(session["access_token"], (Date.today - 30).to_s, Date.today.to_s)
		transactions = transaction_response["transactions"]
		while transactions.length < transaction_response['total_transactions']
		  transaction_response = $client.transactions.get(access_token,
		                                                 '2016-07-12',
		                                                 '2017-01-09',
		                                                 offset: transactions.length)
		  transactions += transaction_response['transactions']
		end
		transactions
	end

end
