# Github-Webhook-Test

# How to run

- Clone repo
- Then run: npm install
- Install ngrok here: https://ngrok.com/download
- ngrok basically allows our localhost recieve post request
- Run server with: node index.js
- Then in cmd or terminal run: ngrok http 3000
- Make sure the ports are the same as whats in index
- Add webhooks to whatever repo you want to just point them to your ngrok address and add one of the 4 post hooks
- Then specify what to send.
- EX Logo: ![Alt](/9939681eb2c1d5871010548b3a0fa139.png "Push event hook targeted to the ngrok /push endpoint")



