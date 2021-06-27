import { Injectable } from '@nestjs/common';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';

@Injectable()
export default class FixerService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    const getResults = async (): Promise<any> =>
      new Promise((res) => {
        this.httpService
          .get(process.env.EXCHANGE_FIXER_URL, {
            params: {
              access_key: process.env.EXCHANGE_FIXER_TOKEN,
              symbols: 'USD,MXN',
            },
          })
          .subscribe(({ data: { date, rates } }) => {
            res({ date, rates });
          });
      });

    this.results = await getResults();
  }

  protected transformData(): void {
    const {
      date,
      rates: { USD, MXN },
    } = this.results;

    // In the free plan, the base is EUR, we have to divide the MXN price with the USD price.
    this.exchange.value = this.getParsedCurrency((MXN / USD).toString());
    this.exchange.lastUpdated = this.getParsedDate(date, 'YYYY-MM-DD');
  }
}
