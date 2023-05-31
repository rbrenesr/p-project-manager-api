require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {router} = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth',router);

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});