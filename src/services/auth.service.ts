import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWT } from '../interfaces/jwt.interface';
import { User } from '../schemas/user.schema';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsernameAndPassword(
      username,
      password,
    );

    return user ?? null;
  }

  login(user: User): JWT {
    return {
      access_token: this.jwtService.sign({ id: user['_id'] }),
    };
  }
}
