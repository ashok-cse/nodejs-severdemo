const app = require('./app');

const {connectDB} = require ("./config/database")

connectDB();




app.listen(9000, () => {

    console.log('Server is listening on port 9000');
    
}
);
