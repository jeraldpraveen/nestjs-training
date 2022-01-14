// Created By [[[nest g service disk]]]
import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {}

  getData() {
    this.powerService.supplyPower(20);
    return 'data';
  }
}
