const path = require('path');
const _workingdir = process.cwd();
const configureStatic = function(app, express){
    app.use('/bootstrap/css', express.static(_workingdir + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
    app.use('/bootstrap/js',  express.static(_workingdir + '/node_modules/bootstrap/dist/js')); // redirect JS bootstrap
    app.use('/bootstrap/jquery',  express.static(_workingdir + '/node_modules/jquery/dist')); // redirect JS jquery
    app.use('/css', express.static(path.join(_workingdir, '/public/css')));
    app.use('/js', express.static(path.join(_workingdir, '/public/js')));
}
exports.configureStatic = configureStatic;