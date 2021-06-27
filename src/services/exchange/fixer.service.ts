import { Injectable } from '@nestjs/common';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';

@Injectable()
export default class FixerService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    console.log(123);
  }
}
