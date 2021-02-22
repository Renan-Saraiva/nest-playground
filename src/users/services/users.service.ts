import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {

    findAll(): User[] {
        return [
            {
                id: 1,
                name: "Renan"
            }
        ];
    }
    
}
