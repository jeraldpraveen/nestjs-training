// Created By [[[nest g service power]]]
import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`Supplying Power Of ${watts} Watts`);
  }
}
