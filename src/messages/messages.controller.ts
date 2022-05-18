import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'OK'
    }
    
    @Post()
    createMessage(@Body() body: any) {
        const message = body.content;
        console.log(message)
    }
    
    @Get('/:id')
    getMessage(@Param('id') id:string) {
        console.log(id);
    }


}
