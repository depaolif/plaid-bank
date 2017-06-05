# Mini-Banking App using Plaid

To get this App started,
1. Go to plaid-backend and start a rails server at port 3001 (`rails server -port 3001`)
2. Go to plaid-frontend and start a server at port 3000 (`npm start`)
3. When the welcome screen shows up, log in to any bank with the sandbox credentials, as listed in the Plaid-Link tooltip at the bottom of the screen:
  username: user_good, 
  password: pass_good
4. Plaid takes a while to retrieve the transaction history (around 30 secs). If the loading is taking over 30 seconds, try refreshing the page and logging in again.
5. You can click on "See Transactions" to see the transaction history for each account-info
6. You can sort transaction histories by descending or ascending by clicking on the sort icon in the table header of choice
