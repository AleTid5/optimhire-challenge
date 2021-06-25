import { Injectable } from '@nestjs/common';
import { User } from '../models/user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    new User('username@test.com', 'changeme'),
    new User('jhonwalker@test.com', 'changeme'),
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user: User) => user.getUsername() === username);
  }
}
