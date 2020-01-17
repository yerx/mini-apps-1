const express = require('express');
const app = express();
const port = 4000;

// start the server at public for the index.html
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => console.log(`Listening on ${port}`));