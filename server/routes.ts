import { Router, Response, Request } from "express";

const router: Router = Router();

router.get("/hello", (req: Request, res: Response): void => {
  res.status(200).send("hello world");
});

export { router };
