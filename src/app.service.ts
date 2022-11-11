import { Injectable } from '@nestjs/common';
import { IUser, IResp } from './interface/user';

@Injectable()
export class AppService {
  private users: Array<IUser> = [
    {
      id: '1',
      name: 'tyq',
      age: 18,
      address: '江西',
    },
  ];

  addUser(user: IUser): IResp {
    this.users.push(user);
    return {
      code: 200,
      success: true,
    };
  }

  delUser(id: string): IResp {
    const delIndex = this.users.findIndex((ele) => ele.id === id);
    this.users.splice(delIndex, 1);
    return {
      code: 200,
      success: true,
    };
  }

  updateUserById(user: IUser): IResp {
    this.users = this.users.map((ele) => {
      if (ele.id === user.id) {
        return user;
      }
      return ele;
    });
    return {
      code: 200,
      success: true,
    };
  }

  getUsers(): IResp {
    return {
      code: 200,
      success: true,
      data: this.users,
    };
  }
}
