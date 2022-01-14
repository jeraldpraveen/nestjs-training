// Created By [[[nest g module disk]]]
import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService]
})
export class DiskModule {}
