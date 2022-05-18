import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'OK'
    }
    
    @Post()
    createMessage(@Body() body: createMessageDto) {
        const message = body.content;
        console.log(message)
    }
    
    @Get('/:id')
    getMessage(@Param('id') id:string) {
        console.log(id);
    }


}
