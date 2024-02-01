const express = require('express')
const app = express();
const router = require('./routes/index');

app.use('/', router)
app.use('/students', router)
app.use('/students/:major', router);
app.listen(1245)

module.exports = app
