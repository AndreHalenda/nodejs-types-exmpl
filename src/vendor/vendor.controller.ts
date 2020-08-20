import { Controller, Get, Param, Post, Body, Put, Delete, CacheInterceptor, UseInterceptors } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorDto } from './vendor.create.dto';
import { ProductService } from 'src/product/product.service';

@Controller('vendors')
@UseInterceptors(CacheInterceptor)
export class VendorController {
  constructor(
      private readonly vendorService: VendorService,
    ) {}

  @Get('all')
  async getAllVendors() {
    return await this.vendorService.findAll();
  }

  @Get(':id')
  async getVendor(@Param() params) {
    return await this.vendorService.findOne(params.id);
  }

  @Post('new-vendor')
  async createVendor(@Body() createVendorDto: VendorDto) {
    return await this.vendorService.create(createVendorDto);
  }

  @Put(':id')
  async updateVendor(@Param('id') id: string, @Body() createVendorDto: VendorDto) {
    return await this.vendorService.update(id, createVendorDto);
  }

  @Delete(':id')
  async deleteVendor(@Param('id') id: string) {
      return await this.vendorService.delete(id);
  }
}
