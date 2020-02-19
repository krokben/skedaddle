import * as dotenv from "dotenv";
import * as express from "express";
import * as morgan from "morgan";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as config from "../webpack.config.js";

dotenv.config();

import inMemoryStore from "./in-memory-store";
import { router } from "./routes";
import { User } from "./user";

interface Store {
  users: User[];
}

const store: Store = inMemoryStore;

const app = express();
const compiler = webpack(config);

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// tslint:disable-next-line:no-console
app.listen(3000, () => console.log("[SERVER] is up and running on 3000 ..."));

export { app, store, Store };
