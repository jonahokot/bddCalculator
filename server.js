const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('calculator', {
    title: 'Calculator',
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(` server started on port: ${server.address().port}`);
});
