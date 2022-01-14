// Created By [[[nest g module computer]]]
import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';

@Module({
  controllers: [ComputerController],
  providers: [CpuService, DiskService, PowerService],
})
export class ComputerModule {}
