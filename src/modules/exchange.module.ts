import { HttpModule, Module } from '@nestjs/common';
import { ExchangeService } from '../services/exchange.service';
import BanxicoService from '../services/exchange/banxico.service';
import DofService from '../services/exchange/dof.service';
import FixerService from '../services/exchange/fixer.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, HttpModule],
  providers: [ExchangeService, BanxicoService, DofService, FixerService],
  exports: [ExchangeService],
})
export class ExchangeModule {}
