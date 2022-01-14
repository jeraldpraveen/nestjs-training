// Created By [[[nest g controller computer/computer --flat]]]
import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(public cpuService: CpuService, public diskService: DiskService) {}

  //RUN --> [[[[localhost:3000/computer]]]]
  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
