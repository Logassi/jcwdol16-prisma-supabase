import { Request, Response } from "express";
import AuthService from "../services/auth.service";

export default class AuthControllers {
  public async registerController(
    req: Request,
    res: Response
    // next: NextFunction
  ) {
    try {
      const user = await AuthService.register(req);

      res.status(200).send({
        message: "OK",
        data: user,
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        message: "NG", //not good
        detail: error,
      });
    }
  }
}
