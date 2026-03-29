import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsIn,
} from 'class-validator';

export class UpsertUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsIn(['user', 'admin'])
  role?: 'user' | 'admin';
}