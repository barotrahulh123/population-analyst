import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import globalErrorHandler from "../middlewares/errorHandler.middleware";
import swaggerUi from "swagger-ui-express";
// const swaggerUi = require('swagger-ui-express');
import swaggerJsdoc from "swagger-jsdoc";
const swaggerSpec = require('../swaggerConfig'); // Import your Swagger configuration

/*
  body-parser: Parse incoming request bodies in a middleware before your handlers, 
  available under the req.body property.
*/

const routeFiles = fs
  .readdirSync(__dirname + "/../routes/")
  .filter((file) => file.endsWith(".js"));

let server;
let routes = [];

const expressService = {
  init: async () => {
    try {
      /*
        Loading routes automatically
      */
      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      server = express();
      server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
      server.use(bodyParser.json());
      server.use(routes);
      server.use(globalErrorHandler);
      server.listen(process.env.SERVER_PORT);
      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  },
};

export default expressService;
