import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username, password);

    return user ?? null;
  }

  async login(user: User) {
    const payload = { username: user.getUsername(), sub: user.getId() };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
