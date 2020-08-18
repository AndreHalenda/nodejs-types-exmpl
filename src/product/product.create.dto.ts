import { IsNotEmpty, IsNumberString } from 'class-validator';
export class ProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    vendorId: string;

}