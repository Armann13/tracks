require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');


// ileride bu databse ile çalışırken ip sürekli değişeceği için oradaki
// ip değiştirmen gerekiyor.

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const MongoUri = 'mongodb+srv://admin:Xa4ahgp0n13@cluster0.958pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MongoUri,{

useNewUrlParser: true,
autoIndex: true
//useCreateIndex: false

});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3006, () => {

    console.log('listen on port 3006 ')
})


