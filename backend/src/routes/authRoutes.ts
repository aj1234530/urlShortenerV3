import express, { Request, Response } from "express";

export const authRouter = express.Router();

authRouter.post("/login", (req: Request, res: Response) => {});
authRouter.post("/signup", (req: Request, res: Response) => {});
