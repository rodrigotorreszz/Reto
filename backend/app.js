
import express from "express";
import cors from "cors";
import taskRoutes from "./src/routes/task.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";



   




const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.use(express.json());

app.use(cookieParser());

const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./DocumentationReto.json"), "utf-8")
  );

  //Mostramos el archivo al ingresar a /api/docs
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/task", taskRoutes);

export default app;