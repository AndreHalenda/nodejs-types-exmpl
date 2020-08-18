import { Module, CacheModule } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { Vendor, VendorSchema } from './vendor.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from 'src/product/product.service';
import { Product, ProductSchema } from 'src/product/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vendor.name, schema: VendorSchema },
      { name: Product.name, schema: ProductSchema }
    ]),
    CacheModule.register({
      ttl: 300,
    })
  ],
  controllers: [VendorController],
  providers: [VendorService, ProductService],
})
export class VendorModule {}
