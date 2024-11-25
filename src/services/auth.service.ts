import { Request } from "express";
import prisma from "../libs/prisma";

export default class AuthService {
  static async findUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async register(req: Request) {
    try {
      const { firstName, lastName, email, password } = req.body;

      const isEmail = await this.findUserByEmail(email);

      if (isEmail) throw new Error("Email already exist");

      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
