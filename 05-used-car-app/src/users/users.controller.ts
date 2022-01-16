import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param() id: number) {
    this.usersService.findOne(id);
  }

  @Get('/:id')
  findAllUsers(@Param() id: number) {
    this.usersService.findOne(id);
  }

  @Patch('/:id')
  updateUser(@Param() id: number, @Body() body: CreateUserDto) {
    this.usersService.update(id, body);
  }
}
