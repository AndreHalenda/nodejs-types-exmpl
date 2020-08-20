import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.create.dto';
import { ProductAndVendorDto } from './productAndVendor.create.dto';

@Controller('products')
@UseInterceptors(CacheInterceptor)
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    ) {}

  @Get('all')
  async getAllProducts() {   
    return await this.productService.findAll();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }

  @Post('new-product')
  async createProduct(@Body() createProductDto: ProductAndVendorDto) {
    return await this.productService.create(createProductDto);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() createProductDto: ProductDto) {
    return await this.productService.update(id, createProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
      return await this.productService.delete(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return await this.productService.findByName(name);
  }

  @Get('vendor/:vendor')
  async findByVendor(@Param('vendor') vendor: string) {
    return await this.productService.findByVendor(vendor);
  }
}
