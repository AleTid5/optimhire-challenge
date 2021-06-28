import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from '../services/user.service';

@Injectable()
export class UserRequestsLimitWorker {
  constructor(private readonly userService: UserService) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  runEvery30Minutes() {
    this.userService.resetUsersLimit();
  }
}
