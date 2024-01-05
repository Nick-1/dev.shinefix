const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main-page');
});

app.listen(PORT, () => {
  console.log(`project-one listening at port ${PORT}`);
});
