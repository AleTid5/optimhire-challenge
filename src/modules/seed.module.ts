import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UserModule } from './user.module';
import { UserSeed } from '../seeds/user.seed';

@Module({
  imports: [CommandModule, UserModule],
  providers: [UserSeed],
})
export class SeedModule {}
