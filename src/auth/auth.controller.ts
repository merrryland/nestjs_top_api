import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

// авторизация исключительно для админов
@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200)
  async login(@Body() dto: AuthDto) {}
}
