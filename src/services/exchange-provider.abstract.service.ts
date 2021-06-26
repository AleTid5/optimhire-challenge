import { Injectable } from '@nestjs/common';
import { Exchange } from '../schemas/exchange.schema';

@Injectable()
export default abstract class ExchangeProviderAbstractService {
  protected exchange: Exchange;

  protected abstract fetchData(): void;

  protected abstract transformData(): void;

  private saveData(): void {
    console.log(this.exchange.value);
  }

  public execute(): void {
    this.fetchData();
    this.transformData();
    this.saveData();
  }
}
