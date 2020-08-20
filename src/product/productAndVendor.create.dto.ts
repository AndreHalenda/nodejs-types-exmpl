import { IsNotEmpty, IsNumberString } from 'class-validator';
export class ProductAndVendorDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    vendorId: string;

    @IsNotEmpty()
    vendorName: string;

}