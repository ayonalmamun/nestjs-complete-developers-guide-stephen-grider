import { Body, Controller, Get, Post, Patch, Param, Query, Delete, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.usersService.create(body.email, body.password);
    }

    @Serialize(UserDto)
    @Get('/:id')
    async findUser(@Param('id') id: string) {
        // console.log('handler is running');
        const user = await this.usersService.findOne(parseInt(id));
        if(!user) throw new NotFoundException('user not found');
        return user;
    }

    @Serialize(UserDto)
    @Get()
    async findAllUsers(@Query('email') email: string) {
        // console.log('handler is running');
        const user = await this.usersService.find(email);
        if(!user.length) throw new NotFoundException('user not found');
        return user;
    }

    @Delete('/:id') 
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body);
    }
    
}
