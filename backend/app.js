const express = require('express');
const path  = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require("dotenv").config();
const userRoutes = require('./routes/user');
const statRoutes = require('./routes/stat');
const unionRoutes = require('./routes/union');
const equipmentRoutes = require('./routes/equipment');

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({origin: '*'}));
// routes
app.use("/api/user", userRoutes);
app.use("/api/stat", statRoutes);
app.use("/api/union", unionRoutes);
app.use("/api/equipment", equipmentRoutes);

app.use((req, res, next)=>{
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404;
  next(error)
})

app.use((err, req, res, next)=>{
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.status || 500);
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기 중');
})