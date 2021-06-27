import { HttpService, Injectable } from '@nestjs/common';
import { Exchange } from '../../schemas/exchange.schema';

@Injectable()
export default abstract class AbstractExchangeProviderService {
  constructor(protected httpService: HttpService) {}

  protected exchange: Exchange = new Exchange();

  protected abstract fetchData(): Promise<void>;

  public async execute(): Promise<Exchange> {
    await this.fetchData();
    return this.exchange;
  }
}
