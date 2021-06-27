import { HttpService, Injectable } from '@nestjs/common';
import { Exchange } from '../../schemas/exchange.schema';
import any = jasmine.any;
import moment from 'moment';

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

  protected getParsedDate(date: string, currentFormat = 'DD-MM-YYYY') {
    return moment(date, currentFormat).format('DD/MM/YYYY');
  }

  public async execute(): Promise<Exchange> {
    await this.fetchData();
    this.transformData();
    return this.exchange;
  }
}
