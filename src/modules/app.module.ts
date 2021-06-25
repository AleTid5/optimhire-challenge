import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { SeedModule } from './seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/optimhire_challenge'),
    AuthModule,
    UserModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
