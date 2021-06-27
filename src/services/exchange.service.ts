import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import BanxicoService from './exchange/banxico.service';
import DofService from './exchange/dof.service';
import FixerService from './exchange/fixer.service';
import { UserService } from './user.service';

@Injectable()
export class ExchangeService {
  constructor(
    private usersService: UserService,
    private banxicoService: BanxicoService,
    private dofService: DofService,
    private fixerService: FixerService,
  ) {}

  async getCurrentExchange(userId: string) {
    const user: User = await this.usersService.findByUserId(userId);

    // this.userCanMakeRequests(userId, user.limit);

    const banxico = await this.banxicoService.execute();
    const fixer = await this.fixerService.execute();
    const dof = await this.dofService.execute();

    return {
      banxico,
      dof,
      fixer,
    };
  }

  /**
   * Controls whether the user can make the request based on their limits
   * @param userId
   * @param limit
   * @private
   */
  private userCanMakeRequests(userId: string, limit: number) {
    if (limit === 0) {
      throw new UnprocessableEntityException();
    }

    this.usersService.decrementLimit(userId);
  }
}
