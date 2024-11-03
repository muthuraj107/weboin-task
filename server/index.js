const express = require('express');
// const dbconfiq=require('./config/db.config')
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes=require('./src/routes/users.apiroutes')

mongoose.Promise=global.Promise

require("dotenv").config();
const app=express()
const port =4001;



mongoose
  .connect(process.env.Mongoose_connection)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("could  not connect to the database");
  });


  app.use(
    cors({
      origin: "*",
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );


    
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api',userRoutes)

  app.listen(port, () => {
    console.log(`Node serer is listenting on port${port}`);
  });