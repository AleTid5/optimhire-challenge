import { HttpService } from '@nestjs/common';
import { Exchange } from '../../schemas/exchange.schema';

export default abstract class AbstractExchangeProviderService {
  constructor(protected httpService: HttpService) {}

  protected exchange: Exchange;

  protected abstract fetchData(): Promise<void>;

  protected abstract transformData(): void;

  private saveData(): void {
    console.log(this.exchange.value);
  }

  public async execute(): Promise<Exchange> {
    await this.fetchData();
    this.transformData();
    this.saveData();
    return this.exchange;
  }
}
