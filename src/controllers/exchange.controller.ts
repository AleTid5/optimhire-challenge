import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ExchangeService } from '../services/exchange.service';

@Controller()
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @UseGuards(JwtAuthGuard)
  @Get('api/exchange')
  getExchange(@Request() req) {
    return this.exchangeService.getCurrentExchange(req.user.id);
  }
}
