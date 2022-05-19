import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    CreateUser(@Body() body: CreateUserDto) {
        console.log(body);
    }
}
