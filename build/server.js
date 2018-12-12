const express = require('express'),
    app = express(),
    PORT = 4040;

app.use(express.static(`${__dirname}/../out`));

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}.`);
});
