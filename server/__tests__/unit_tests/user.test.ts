import { Store } from "../../server";
import { User, getUsers } from "../../user";

test("get users", async () => {
  const stubStore: Store = { users: [] };
  const users: User[] = await getUsers(stubStore);

  expect(users.length).toBe(0);
});
