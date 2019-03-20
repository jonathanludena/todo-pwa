
if(process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//Inicializaciones
const app = express();
require('./database')

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname))
  }
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Rutas API
app.use('/contact', require('./public/contact.php'))
app.use('/api/tasks', require('./routes/tasks'));

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
