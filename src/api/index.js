import express from "express";
import bodyParser from "body-parser";
import queries from "./queries.js"
const app = express()
const db = queries
const port = 3000



app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use((req, res, next) => {
    // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Allow specific headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      // Respond with the allowed methods and headers
    res.sendStatus(200);
    } else {
      // Continue to the next middleware or route
    next();
    }
});

let cans = [
    {type: "Pepsi", name: "Pepsi", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/5cdd30edb6e4a6750ca52f3edf54f25b-700x700.png"},
    {type: "Pepsi", name: "Nitro", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/314ccdf5c939ba4a95ac9b0e7575d36d-700x700.jpeg"},
    {type: "Pepsi", name: "Mango", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/29eb6dc7763a1f2e1607b9b153dd8a89-700x700.jpeg"},
    {type: "Pepsi", name: "Caffeine Free", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/63c5119e89f069d6c6db63a9c387d3a2.png"},
    {type: "Pepsi", name: "1893", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/523727fd6c483bfe166443f674c9296c.png"},
    {type: "Mtn Dew", name: "Mtn Dew", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/1047b519d2b20e48c4a119daa41e7ef7-300x300.png"},
    {type: "Mtn Dew", name: "Caribbean", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/60ab3c2c163b8b96717dd8ca7db52368-700x700.png"},
    {type: "Mtn Dew", name: "Kickstart", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/d5ef429f1ec663660ce15d8f7d42d4d2-700x700.png"},
    {type: "Mtn Dew", name: "Spark", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/4e5521c7f37a8bff5bc3f583a5adab81.png"},
    {type: "Mtn Dew", name: "Red", image: "https://cdn.destinilocators.com/pepsicrossbrand/images/imagebuckets/bucket-5/9ff9059d268eec2577675ae95d3b6da8.jpeg"},
    
]

let cart = [

]


app.get('/cans', db.getCans)
app.get('/cans/:id', db.getCanById)
app.get('/brands/:brand', db.getCanByBrand)
app.get('/cart', db.getCart)
app.get('/cartSize', db.cartSize)
app.post('/cans', db.createCan)
app.post('/cart/:brand/:product/:image/', db.createCartItem)
app.put('/cans/:id', db.updateCan)
app.delete('/cans/:id', db.deleteCan)
app.delete('/cart/', db.deleteAllCartItem)
app.delete('/cart/:product', db.deleteCartItem)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})