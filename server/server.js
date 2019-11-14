const path = require('path');

const { app } = require('./app/app');
const { clientMiddleware } = require('./middleware/client/clientMiddleware');
const { redirectMiddleware } = require('./middleware/redirect/redirectMiddleware');
const { apiRouter } = require('./router/apiRouter');
const {
  notFoundErrorHandler,
  methodNotAllowed,
  genericErrorHandler
} = require('./middleware/error/errorMiddleware');

require('./database/connect');

if (process.env.NODE_ENV === 'development') {
  clientMiddleware(app);
}

app.use('/api', apiRouter);

app.get('/:shortlink', redirectMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(notFoundErrorHandler);
app.use(genericErrorHandler);
app.use(methodNotAllowed);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});
