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

    const results = await getResults();
    const [{ dato, fecha }] = results.reverse();

    this.exchange.value = dato;
    this.exchange.lastUpdated = fecha;
  }
}
