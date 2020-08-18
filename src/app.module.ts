import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { VendorModule } from './vendor/vendor.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017' || process.env.MONGO_URI),
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
