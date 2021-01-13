const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());





//Create your endpoints/route handlers

app.get("/api/rates/", async (req, res) => {
    const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${req.query.base}&symbols=${req.query.currency}`)

    // ?base=CZK&currency=EUR,GBP,USD

    let base = req.query.base
    let currencies = req.query.currency;

    //RET
    let body = {
        base,
        date: response.data.date,
        currencies,
        rates: response.data.rates
    }
    try {
        return res.json({
            "results": {
                body
            }
        })
    } catch (error) {
        res.send(res.statusCode, error); //handle unsuccessful request with status code
    }
});



app.listen(5000, () => {
    console.log("Server running on port 5000");
});
