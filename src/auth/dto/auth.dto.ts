import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthTDO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
