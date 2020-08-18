import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor } from './vendor.schema';
import { VendorDto } from './vendor.create.dto';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  async create(vendorDto: VendorDto): Promise<Vendor> {
    const createdVendor = new this.vendorModel(vendorDto);
    return createdVendor.save();
  }

  async findAll(): Promise<Vendor[]> {
    return this.vendorModel.find().exec();
  }

  async update(id: string, vendorDto: VendorDto) {
    return await this.vendorModel.findByIdAndUpdate(id, vendorDto);
  }

  async findOne(id: string) {
    return this.vendorModel.findById(id);
  }

  async delete (id: string) {
    return await this.vendorModel.deleteOne({ _id: id });
  }
  
}
