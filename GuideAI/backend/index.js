const express = require("express"); // we imported express that runs our http server
const cors = require("cors"); // we imported cores so that we can call this server from any other origin
const axios=require('axios');
// done below
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
// till here
app.post("/authenticate", async (req, res) => {  // as the codes runs and hits this "Authenticate" endpoint  we are gonna create a user object for this username in CHATENGINERDATABASE
  const { username } = req.body; // we create post endpoint for authenticate& by doing that,  it takes a user name from the request body  
  // Extract the 'username' property from the request body
try {
    const r=await axios.put(
    'https://api.chatengine.io/users/',// API call
    // now we pass require data for what the endpoint needs
    {username:username,secret: username,first_name:username},// secret for now is username also (change for security measure)
    {headers:{"Private-Key": "34f2ddf4-e846-4e92-8640-d877bf32c369"}}// we set header to authenticate API calls using private key, copy pasted from chatengine.io
    );
    return res.status (r.status).json(r.data);// if the response goes throug the API we return the status, meaning show the username
} catch(e){
    return res.status(e.response.status).json(e.response.data);// if there is an error
}
});


  //return res.json({ username: username, secret: "sha256..." }); // & and returns a fake user with a username and password
// Return a JSON response with the username and a placeholder secret
//});// not real authentication just yet.


app.listen(3001); // we run the app in port 3001




// From line 8 to 22 we basically, we taking username from the request body and getting(checking if) a user in chat engine if a user already exist
// if not we create from scratch
