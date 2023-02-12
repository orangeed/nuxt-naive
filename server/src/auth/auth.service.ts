import { Injectable } from '@nestjs/common';
import { cryptoString } from '../libs/lib';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('auth service validateUser', username, password);
    const data = await this.usersService.findOneByName(username);

    console.log('auth service validateUser data', data);

    const user = JSON.parse(JSON.stringify(data || {}));

    // password = cryptoString(password);

    // console.log('password', password);

    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log('result', result);
      return result;
    }
    return null;
    // return {
    //   data: null,
    //   code: 500,
    //   message: '用户名或者密码错误！'
    // }
  }

  // 登录
  async login(user: any) {
    console.log('login  xxxxxx', user);
    const payload = {
      username: user.name,
      userId: user['id'],
      roles: user.roles,
      status: user.status,
      department: user.department,
      phone: user.phone,
      avatar: user.avatar,
      departmentName: user.departmentName,
      departmentId: user.departmentId,
      areaId: user.areaId,
      delStatus: user.delStatus,
    };
    // delStatus === 1有效，delStatus === 2 注销了
    if (payload.delStatus === '1') {
      return {
        data: {
          token: this.jwtService.sign(payload),
        },
        code: 200,
        message: '登录成功！',
      };
    } else {
      return {
        code: 201,
        message: '该用户已注销',
        data: null,
      };
    }
  }

  // 登出
  async logout() {
    return {
      message: 'ok',
    };
  }
}
