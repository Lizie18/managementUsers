const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));

// Middlewares
app.use(express.json());

// Routes
app.use('/api', require('./routes/users'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});