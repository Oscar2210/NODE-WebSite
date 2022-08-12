/* forma comun de invocar express
const express = require('express'); */

/*UTILIZANDO EL TYPE:MODULE JS*/
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoute from "./routes/routes.js";
//import ejs from "ejs";

const app = express();

//Ruta absoluta, ubicacion de las vistas
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname)

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoute);

//Llamando el main.css
app.use(express.static(join(__dirname, "public")));

app.listen(process.env.PORT || 3000);
console.log("Server listening on port :", process.env.PORT || 3000);
