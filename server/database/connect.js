const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_ENDPOINT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connection - SUCCESS');
  })
  .catch(error => {
    console.log('Database connection - FAILURE');
    console.error(error);
    process.exit(1);
  });
