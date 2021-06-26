import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { SeedModule } from './seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    AuthModule,
    UserModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
