import { Store } from "../../server";
import { User, getUsers, getUser, addUser } from "../../user";

test("get users", async () => {
  const stubStore: Store = { users: [] };
  const users: User[] = await getUsers(stubStore);

  expect(users.length).toBe(0);
});

test("get user", async () => {
  const exampleUser = {
    name: "bob"
  };
  const stubStore: Store = { users: [exampleUser] };

  await expect(getUser(stubStore, "bob")).resolves.toBe(exampleUser);
});

test("add user", async () => {
  const stubStore: Store = { users: [] };
  const newUser: User = {
    name: "bob"
  };

  await addUser(stubStore, newUser);
  await expect(getUser(stubStore, "bob")).resolves.toBe(newUser);
});
