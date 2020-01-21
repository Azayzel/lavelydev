import express from "express";
import compression from "compression";
import session from "express-session";
import morgan from "morgan";
import router from "./routes/routes";
const app = express();

app.use(compression());
app.use(express.static("public"));

app.use("/", router);

const port = process.env.PORT || 3030;

app.listen(port, () => console.info(`Running on ${port}...`));
