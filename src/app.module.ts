import { MiddlewareConsumer, Module,  NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module'
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    UsersModule,
    PostsModule
  ]
})
export class AppModule implements NestModule  {
  
  allRoutes: string = "*";

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(this.allRoutes);
  }

}
