import { Controller, Get } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

  constructor(private _userService: UsersService) { }

    @Get()
    findAll(): User[] {
      return this._userService.findAll();
    }

}
