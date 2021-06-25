import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../strategies/local.strategy';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { UsersService } from '../services/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME },
    }),
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
