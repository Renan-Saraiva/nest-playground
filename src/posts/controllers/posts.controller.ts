import { Controller , Get} from '@nestjs/common'
import { Post } from '../interfaces/post.interface';
import { PostsSerivice } from '../services/posts.service';

@Controller("posts")
export class PostsController {

    constructor(private _postsService: PostsSerivice) { }

    @Get()
    findAll() : Post[] {
        return this._postsService.findAll();
    }

}