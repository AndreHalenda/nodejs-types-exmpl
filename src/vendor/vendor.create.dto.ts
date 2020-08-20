import { IsNotEmpty, IsNumberString } from "class-validator";

export class VendorDto {
    @IsNotEmpty()
    name: string;
}