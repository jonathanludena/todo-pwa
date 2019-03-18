const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}).then(db => console.log(`DB connected`))
  .catch(err => console.error(`Error en conexion con DB Mongo: ${err}`));