import { Router, Response, Request } from "express";
import { store } from "./server";
import { getUsers, getUser, addUser } from "./user";

const router: Router = Router();

router.get("/users", (req: Request, res: Response): void => {
  res.status(200).json(getUsers(store));
});

router.get("/users/:name", (req: Request, res: Response): void => {
  getUser(store, req.params.name)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).send(error));
});

router.post("/users", (req: Request, res: Response): void => {
  addUser(store, req.body.user);
  res.sendStatus(202);
});

export { router };
