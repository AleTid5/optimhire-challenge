import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user?.getPassword() === pass) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.getUsername(), sub: user.getId() };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
