import { Injectable } from '@nestjs/common';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';

@Injectable()
export default class DofService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    console.log(123);
  }

  protected transformData(): void {
    console.log(123);
  }
}
