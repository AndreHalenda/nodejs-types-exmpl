import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { ProductDto } from './product.create.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(productDto: ProductDto): Promise<Product> {
    const createdProduct = new this.productModel(productDto);
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
