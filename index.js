const express = require('express')
const app = express()
app.use('/public', express.static('dist'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
