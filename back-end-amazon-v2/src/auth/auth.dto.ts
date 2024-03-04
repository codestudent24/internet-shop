import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator'

export class AuthDto {
  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'Password should contain at least 6 charecters'
  })
  @IsString()
  password: string

  @IsBoolean()
  @IsOptional()
  isAdmin: boolean
}

export class RefreshTokenDto {
  @IsString()
  refreshToken: string
}
