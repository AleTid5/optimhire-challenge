import { HttpService, Injectable } from '@nestjs/common';
import { Exchange } from '../../schemas/exchange.schema';
import any = jasmine.any;

@Injectable()
export default abstract class AbstractExchangeProviderService {
  constructor(protected httpService: HttpService) {}

  protected results: any;
  protected exchange: Exchange = new Exchange();

  protected abstract fetchData(): Promise<void>;

  protected abstract transformData(): void;

  protected getParsedCurrency(currency: string) {
    return parseFloat(currency).toFixed(3);
  }

  public async execute(): Promise<Exchange> {
    await this.fetchData();
    this.transformData();
    return this.exchange;
  }
}
