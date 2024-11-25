import { Router } from "express";
import AuthControllers from "../controllers/auth.controller";

export default class AuthRoute {
  private router;
  private auth = new AuthControllers();

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    // this.router.get("/");
    this.router.post("/register", this.auth.registerController);
  }

  public getRoute() {
    return this.router;
  }
}
