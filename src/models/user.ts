export class User {
  private readonly id: number;
  private readonly username: string;
  private readonly password: string;
  private static idGenerator = 0;

  constructor(username, password) {
    this.id = User.idGenerator++;
    this.username = username;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }
}
