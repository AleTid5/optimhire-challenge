import { Injectable } from '@nestjs/common';
import scrapeIt from 'scrape-it';
import AbstractExchangeProviderService from './abstract.exchange-provider.service';
import DOFContract from '../../contracts/dof.contract';
import moment from 'moment';

@Injectable()
export default class DofService extends AbstractExchangeProviderService {
  protected async fetchData(): Promise<void> {
    const {
      data: { data: results },
    } = await scrapeIt(DofService.getUrl(), {
      data: DOFContract,
    });

    [this.results] = results;
  }

  protected transformData(): void {
    const { date, value } = this.results;

    this.exchange.value = this.getParsedCurrency(value);
    this.exchange.lastUpdated = this.getParsedDate(date);
  }

  private static getUrl() {
    const now = moment();
    const url = process.env.EXCHANGE_DOF_URL;

    // Last update day is friday. In case, today is sunday, we subtract 2 days.
    // Otherwise, if today is saturday, we subtract only 1 day
    if (now.day() === 0) {
      now.subtract(2, 'day');
    } else if (now.day() === 6) {
      now.subtract(1, 'day');
    }

    return url
      .replace(':from_date', now.format('DD/MM/YYYY'))
      .replace(':to_date', now.format('DD/MM/YYYY'));
  }
}
