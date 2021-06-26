import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller()
export class ExchangeController {
  // This guard will authenticate any request
  @UseGuards(JwtAuthGuard)
  @Get('exchange')
  getProfile(@Request() req) {
    return req.user;
  }
}
