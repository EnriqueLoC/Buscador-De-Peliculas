const app = require('./config/server.js');
require('./app/routes/pages.js')(app);

app.listen(app.get('port'), () => {
    console.log('Server active on port', app.get( 'port' ));
});