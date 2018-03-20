const express = require('express'),
    app = express();

app.use(express.static('../build'));

app.listen(4040, () => {
  console.log('App started on port 4040.');
});
