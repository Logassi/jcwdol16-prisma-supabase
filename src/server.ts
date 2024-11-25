import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT } from "./configs/envConfig";
import AuthRoute from "./routes/auth.route";

export default class Server {
  private app: Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = PORT || 8080;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use("/auth", new AuthRoute().getRoute());
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}
