import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthTDO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() authDTO: AuthTDO) {
    console.log(authDTO);
    return this.authService.register(authDTO);
  }

  @Post('login')
  login(@Body() authDTO: AuthTDO) {
    return this.authService.login(authDTO);
  }
}
