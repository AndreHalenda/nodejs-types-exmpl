import { Model } from 'mongoose';
import { Injectable, Inject, forwardRef, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor } from './vendor.schema';
import { VendorDto } from './vendor.create.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class VendorService {
  constructor(
    @InjectModel(Vendor.name) private vendorModel: Model<Vendor>,
    @Inject(forwardRef(() => ProductService))
        private readonly productService: ProductService,
  ) {}

  async create(vendorDto: VendorDto): Promise<Vendor> {
    const createdVendor = new this.vendorModel(vendorDto);
    return createdVendor.save();
  }

  async findAll(): Promise<Vendor[]> {
    return await this.vendorModel.find().exec();
  }

  async update(id: string, vendorDto: VendorDto) {
    return await this.vendorModel.findByIdAndUpdate(id, vendorDto);
  }

  async findOne(id: string) {
    return this.vendorModel.findById(id);
  }

  async delete (id: string) {
    const product = this.productService.findByVendor(id);
    if (!product) {
      return await this.vendorModel.deleteOne({ _id: id });
    }
    throw new InternalServerErrorException("Current vendor related to product")
  }
  
}
