const path = require('path');

const { app } = require('./app/app');
const { clientMiddleware } = require('./middleware/client/clientMiddleware');

if (process.env.NODE_ENV === 'development') {
  clientMiddleware(app);
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});
