const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
const helpers = require('./utils/helper');
const hbs = exphbs.create({helpers});
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(controllers);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
