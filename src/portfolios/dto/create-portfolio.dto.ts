import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;
}
