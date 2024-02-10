import { MinLength, IsEmail, IsString } from 'class-validator'

export class AuthDto {
  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'Password should contain at least 6 charecters'
  })
  @IsString()
  password: string
}

export class RefreshTokenDto {
  @IsString()
  refreshToken: string
}
