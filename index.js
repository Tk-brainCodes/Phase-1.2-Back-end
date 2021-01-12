const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());





//Create your endpoints/route handlers

app.get("/api/rates/", async (req, res) => {
    const response = await axios.get(`https://api.exchangeratesapi.io/latest`)

    let base = req.query.base
    let currencies = req.query.currency;

    //covert from the BASE to CURRENCIES
    //display the currencies converted
 
    //RET
    let body = {
        base,
        date: response.data.date,
        currencies,
        rates: response.data.rates
    }
    return res.json({
        "results": {
            body
        }
    })
});



app.listen(5000, () => {
    console.log("Server running on port 5000");
});
