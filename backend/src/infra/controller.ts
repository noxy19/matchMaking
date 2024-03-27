import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../app/service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Post("/match-request")
  async postMatchRequest(): Promise<{ requestId: number }> {
    return {
      requestId: 1234
    }
  }

  @Get("/match-request/:requestId")
  async getMatchRequest(@Param('requestId') requestId: number): Promise<{ requestId: number, participants: string[], found: boolean }> {
    return {
      requestId: requestId,
      participants: [],
      found: false
    }
  }

}
