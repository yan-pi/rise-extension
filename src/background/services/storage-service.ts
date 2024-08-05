import { User } from "../models/user";

export class StorageService {
  private users: User[] = [];

  public addUser(user: User) {
    this.users.push(user);
    chrome.storage.local.set({ users: this.users });
  }

  public getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(["users"], (result) => {
        if (result.users) {
          resolve(result.users);
        } else {
          reject("No users found");
        }
      });
    });
  }
}
