import { Module, CacheModule, forwardRef } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { VendorService } from 'src/vendor/vendor.service';
import { VendorSchema, Vendor } from 'src/vendor/vendor.schema';
import { VendorModule } from 'src/vendor/vendor.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Vendor.name, schema: VendorSchema },
    ]),
    CacheModule.register({
      ttl: 300,
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, VendorService],
  exports: [ProductService],
})
export class ProductModule {}
