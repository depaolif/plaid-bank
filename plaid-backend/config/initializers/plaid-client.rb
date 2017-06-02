require 'plaid'


$client = Plaid::Client.new(env: :sandbox,
                            client_id: ENV["client_id"],
                            secret: ENV["secret_key"],
                            public_key: ENV["public_key"])

response = item_response = $client.item.create(credentials: { username: 'user_good', password: 'pass_good' },
											institution_id: 'ins_109509',
											initial_products: %i(auth identity transactions))