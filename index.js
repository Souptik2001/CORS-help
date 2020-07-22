const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.removeHeader("Access-Control-Allow-Origin");
    // console.log(req.headers.cookie);
    fetch('https://joke-api-strict-cors.appspot.com/random_joke').then((joke)=>{
        joke.json().then((joke_j)=>{
            res.json(joke_j);
            //OR
            // res.send(JSON.stringify({
            //     "setup": joke_j.setup,
            //     "punchline": joke_j.punchline
            // }));
        });
    }).catch((err)=>{
        req.json({
            "Error": err
        });
    });
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server listening at http://localhost:3000");
});