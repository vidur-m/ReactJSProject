const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js'); // Assuming this is your route file

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

// Use the PORT environment variable provided by Render
const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

router.get('/auth/github/callback', (req, res) => {
  res.send('GitHub callback received successfully!'); 
});

module.exports = router;