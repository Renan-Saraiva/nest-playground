import { Module }  from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsSerivice } from './services/posts.service';

@Module({
    controllers: [PostsController],
    providers: [PostsSerivice]
})
export class PostsModule { }