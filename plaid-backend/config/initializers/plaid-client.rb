require 'plaid'


$client = Plaid::Client.new(env: :sandbox,
                            client_id: '***',
                            secret: '***',
                            public_key: '***')