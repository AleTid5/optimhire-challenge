import { Injectable } from '@nestjs/common';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';

@Injectable()
export default class BanxicoService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    const getResults = async (): Promise<any[]> =>
      new Promise((res) => {
        this.httpService.get('').subscribe(({ data: { results } }) => {
          res(
            results.map((results) => {
              console.log(results);
            }),
          );
        });
      });
  }

  protected transformData(): void {
    console.log(123);
  }
}
