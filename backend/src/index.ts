import express, { Response, Request } from "express";
import { authRouter } from "./routes/authRoutes";
import { urlRouter } from "./routes/urlRoutes";
import { uniqueSlugGenerator } from "./utils/uniqueSlugGenerator";

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).json(uniqueSlugGenerator());
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/url", urlRouter);

app.listen(3000);

//routes
//login route
//signup route

//

//create short link route
//access short link route (and redirect from here)
//

