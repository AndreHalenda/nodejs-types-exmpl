import { Model } from 'mongoose';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { ProductDto } from './product.create.dto';
import { ProductAndVendorDto } from './productAndVendor.create.dto';
import { VendorService } from 'src/vendor/vendor.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @Inject(forwardRef(() => VendorService))
        private readonly vendorService: VendorService,
  ) {}

  async create(productDto: ProductAndVendorDto): Promise<Product> {
    const vendor = await this.vendorService.findOne(productDto.vendorId);
    if (!vendor){
      const newVendor = await this.vendorService.create({name: productDto.vendorName}); 
      const createdProduct = new this.productModel({name: productDto.name, vendorId: newVendor._id});
      return createdProduct.save();
    }
    const createdProduct = new this.productModel({name: productDto.name, vendorId: productDto.vendorId});
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async update(id: string, productDto: ProductDto) {
    return await this.productModel.findByIdAndUpdate(id, productDto)
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async delete (id: string) {
      return this.productModel.deleteOne({id});
  }

  async findByName(name: string) {
    return this.productModel.find({name});
  }

  async findByVendor(vendor: string) {
    return await this.productModel.find({vendorId: vendor});
  }
  
}
