import { Store } from "./server";

export interface User {
  name: string;
}

export function getUsers(store: Store): User[] {
  return store.users;
}
