const { default: axios } = require('axios');
const {Router} = require('express');
const router = Router();
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';

//https://jsonplaceholder.typicode.com/

//Pedir datos de una Fake Api con node Fetch



router.get('/users', async (req,res) => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const options = {
        "method": "GET",
    };
    // const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // const users = await response.json();

    const users = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
    }).then((respuesta) => {
        // console.log(respuesta.data);
        res.send(respuesta.data);
    })

    // console.log('users');
    res.json(users);
})

module.exports = router;
