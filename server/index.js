require('dotenv').config();

const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const SwaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'The Shop API',
			description: 'Shop routes api information',
			contact: {
				name: 'Collaborators: Vadim & Aliksandr / Designer: Nikita'
			},
			server: ['http:\\localhost:3001']
		}
	},
	apis: [
	  'index.js', 
	  './routes/brandRouter.js',
	  './routes/categoryRouter.js',
	  './routes/mainSliderRouter.js',
	  './routes/productRouter.js',
	  './routes/userRouter.js'
	]
}
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// middleware, обрабатывающий ошибки обязательно замыкающий. Next не вызывается!
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

console.log(sequelize);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server start at PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
