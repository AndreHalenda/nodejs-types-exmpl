import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Vendor extends Document {

    @Prop()
    name: string;

}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
