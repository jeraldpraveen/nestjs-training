import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { NestFactory } from '@nestjs/core';
import { nextTick } from 'process';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // RUN SOMETHING BEFORE A REQUEST IS HANDLED BY REQUEST HANDLER IN CONTROLLER
    console.log('Before Handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // RUN SOMETHING BEFORE RESPONSE IS SENT OUT
        console.log('Before Response', data);
      }),
    );
  }
}
