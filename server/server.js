// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit-order', (req, res) => {
  const order = req.body;
  // Process the order (e.g., save to a database, handle payment)
  
  res.json({
    orderId: '123456',
    message: 'Order confirmed!',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
