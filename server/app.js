function getRoot(request, response) {
    response.sendFile(path.resolve('../client/dist/codeit/index.html'));
 }
 
 function getUndefined(request, response) {
    response.sendFile(path.resolve('../client/dist/codeit/index.html'));
 }
 

const express = require('express'),
    Session = require('express-session'),
    bodyParse = require('body-parser'),
    FileStore = require('session-file-store')(Session),
    config = require('./config/default'),
    flash = require('connect-flash'),
    port = 3333,
    app = express();
    path = require("path");

const node_media_server = require('./media_server');


app.use(flash());
app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));
 
app.use(Session({
    store: new FileStore({
        path : './server/sessions'
    }),
    secret: config.server.secret,
    maxAge : Date().now + (60 * 1000 * 30)
}));
app.use(express.static('../client/dist/codeit'));
app.get('/', getRoot);
app.get('/*', getUndefined);
node_media_server.run();
app.listen(port, () => console.log(`App listening on ${port}!`));