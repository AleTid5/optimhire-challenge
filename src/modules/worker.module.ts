import { Module } from '@nestjs/common';
import { UserRequestsLimitWorker } from '../workers/user-requests-limit.worker';
import { UserModule } from './user.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [UserModule, ScheduleModule.forRoot()],
  providers: [UserRequestsLimitWorker],
  exports: [UserRequestsLimitWorker],
})
export class WorkerModule {}
