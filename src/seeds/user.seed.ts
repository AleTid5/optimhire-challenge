import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Injectable()
export class UserSeed {
  constructor(private readonly userService: UserService) {}

  @Command({
    command: 'database:seed:users',
    describe: 'create initial users',
    autoExit: true,
  })
  async create() {
    await this.userService.add({
      username: 'jhon@test.com',
      password: 'fake123',
    });

    await this.userService.add({
      username: 'robert@test.com',
      password: 'hello123',
    });
  }
}
