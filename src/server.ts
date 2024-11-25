import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT } from "./configs/envConfig";

export default class Server {
  private app: Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = PORT || 8080;
    this.middlewares();
    this.route();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  private route() {
    this.app.use("/auth");
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}
