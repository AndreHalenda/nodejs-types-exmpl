import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { VendorModule } from './vendor/vendor.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.yggms.mongodb.net/test'),
    VendorModule,
    ProductModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
