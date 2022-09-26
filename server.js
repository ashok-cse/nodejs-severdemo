const app = require('./app');

const {connectDB} = require ("./config/database")

connectDB();




var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
