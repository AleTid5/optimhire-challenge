import { Injectable } from '@nestjs/common';
import { Exchange } from '../models/exchange';

@Injectable()
export default abstract class ExchangeProviderAbstractService {
  protected exchange: Exchange;

  protected abstract fetchData(): void;

  protected abstract transformData(): void;

  private saveData(): void {
    console.log(this.exchange.getValue());
  }

  public execute(): void {
    this.fetchData();
    this.transformData();
    this.saveData();
  }
}
