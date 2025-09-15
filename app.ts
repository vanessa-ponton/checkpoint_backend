import express from "express";
import  router  from "./src/route/paysRoute";

const app = express();
app.use(express.json());
app.use("/", router);

export default app;
