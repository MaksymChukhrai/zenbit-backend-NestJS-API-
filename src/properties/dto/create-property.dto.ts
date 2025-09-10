import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  currency: string;

  @IsString()
  @IsOptional()
  priceLabel?: string;

  @IsUrl()
  imageUrl: string;

  @IsNumber()
  yieldPercentage: number;

  @IsNumber()
  soldPercentage: number;

  @IsString()
  ticketSize: string;

  @IsNumber()
  daysLeft: number;
}
