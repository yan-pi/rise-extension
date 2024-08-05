import { User } from "../models/user";

export class StorageService {
  static saveUser(user: User): void {
    // Implementar lógica para salvar usuário em armazenamento local
    console.log("Usuário salvo:", user);
  }
}
