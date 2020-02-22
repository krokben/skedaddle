import { Store } from "./server";

export interface User {
  name: string;
}

export function getUsers(store: Store): User[] {
  return store.users;
}

export function getUser(store: Store, name: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const user = store.users.find(item => item.name === name);
    if (user) {
      resolve(user);
      return;
    }
    reject(error => error);
  });
}

export function addUser(store: Store, user: User): void {
  store.users.push(user);
}
