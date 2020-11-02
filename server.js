const express = require("express");
const stripe = require("stripe")("sk_test_51HYxOjFtYKWdDatMbOYycFu4J3diAvvH3F7OLZzonsOrj3EpimRY6xWlobELyHre4y0cnBSlxZM2WOPCuN0Qy6Vg00jf5mCM3V");
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')
const {createServer} = require('http')
const path = require('path');

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan('common'))
app.use(compression())


app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (res, req) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to Searching for Solutions',
            },
            unit_amount: 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/Donate',
    });
  
    res.json({ id: session.id });
});

//listen

const server = createServer(app);
server.listen(4242, () => console.log('Listening @ port: 4242'))