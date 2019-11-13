const path = require('path');

const { app } = require('./app/app');
const { clientMiddleware } = require('./middleware/client/clientMiddleware');
const { redirectMiddleware } = require('./middleware/redirect/redirectMiddleware');
const { apiRouter } = require('./router/apiRouter');

if (process.env.NODE_ENV === 'development') {
  clientMiddleware(app);
}

app.use('/api', apiRouter);

app.get('/:shortUrl', redirectMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});
