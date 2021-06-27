import { Injectable } from '@nestjs/common';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';

@Injectable()
export default class BanxicoService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    const getResults = async (): Promise<any[]> =>
      new Promise((res) => {
        this.httpService
          .get(process.env.EXCHANGE_BANXICO_URL, {
            headers: {
              'Bmx-Token': process.env.EXCHANGE_BANXICO_TOKEN,
            },
          })
          .subscribe(
            ({
              data: {
                bmx: { series },
              },
            }) => {
              const [{ datos }] = series;

              res(datos);
            },
          );
      });

    this.results = await getResults();
  }

  protected transformData(): void {
    const [{ dato, fecha }] = this.results.reverse();

    this.exchange.value = this.getParsedCurrency(dato);
    this.exchange.lastUpdated = fecha;
  }
}
