import { Injectable } from '@nestjs/common'
import { Post } from '../interfaces/post.interface';

@Injectable()
export class PostsSerivice{
    findAll(): Post[] {
        return [
            {
                id: 1,
                title: "Meu primeiro post",
                content: "Conteudo do meu primeiro post"
            }            
        ];
    }
}