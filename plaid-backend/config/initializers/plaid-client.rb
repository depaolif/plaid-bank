require 'plaid'


$client = Plaid::Client.new(env: :sandbox,
                            client_id: ENV["client_id"],
                            secret: ENV["secret_key"],
                            public_key: ENV["public_key"])