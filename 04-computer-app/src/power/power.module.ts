// Created By [[[nest g module powe]]]
import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService]
})
export class PowerModule {}
