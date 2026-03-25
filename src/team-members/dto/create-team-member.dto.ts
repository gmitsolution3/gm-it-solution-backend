import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateTeamMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsUrl()
  @IsOptional()
  linkedin?: string;
}