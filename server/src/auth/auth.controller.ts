import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuardUser } from './guards/local-auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Log } from '../libs/utils';

@ApiTags('用户登录')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuardUser)
  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  async login(@Request() req) {
    console.log('user auth ctrl', req.user);
    // if (req.user.code && req.user.code !== 200) return req.user
    Log({ req, user: req.user });
    return this.authService.login(req.user);
  }
  // async login(@Body() loginUserDto: LoginUserDto) {
  //   return this.authService.login(loginUserDto);
  // }

  @Post('logout')
  @ApiOperation({ summary: '用户登出' })
  async logout() {
    return this.authService.logout();
  }
}
