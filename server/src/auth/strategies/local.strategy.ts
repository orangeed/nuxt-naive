import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategyUser extends PassportStrategy(Strategy, 'userlocal') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('---', username, password);
    const user = await this.authService.validateUser(username, password);
    console.log('validate00000', user);
    if (!user) {
      throw new UnauthorizedException({
        message: '用户名密码错误',
        code: 401,
        data: null
      });
    }
    return user;
  }
}
