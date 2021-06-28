import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserController } from '../controllers/user.controller';
import { ExchangeController } from '../controllers/exchange.controller';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { SeedModule } from './seed.module';
import { ExchangeModule } from './exchange.module';
import { WorkerModule } from './worker.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    AuthModule,
    ExchangeModule,
    UserModule,
    SeedModule,
    WorkerModule,
  ],
  controllers: [UserController, ExchangeController],
})
export class AppModule {}
