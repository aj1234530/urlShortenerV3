import express, { Request, Response } from "express";
import { authCheck } from "../middlewares/authCheck";

export const urlRouter = express.Router(); //try to rem this syntax

//for guest user won't have tags and comments - get deleted in 30m in(can put this in redis only as no analytics is required)
urlRouter.post("/guest/create/new", (req: Request, res: Response) => {
    //accept the url and redirect from here only
});

//this route is for signed up user(will have tags and comments)
//prettier-ignore
urlRouter.post("/authuser/create/new",authCheck,(req: Request, res: Response) => {
    
});

urlRouter;
