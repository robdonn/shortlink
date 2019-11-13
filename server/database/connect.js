const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_ENDPOINT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connection - success');
  })
  .catch(error => {
    console.error(error);
  });
