const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// Rate Limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 100
});

app.use(limiter);

app.set('trust proxy', 1);

// Enable Cors
app.use(cors());

//Routes
app.use('/api', require('./routes'));

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));