import { Router, Response, Request } from "express";
import { store } from "./server";
import { getUsers } from "./user";

const router: Router = Router();

router.get("/users", (req: Request, res: Response): void => {
  res.status(200).json(getUsers(store));
});

export { router };
