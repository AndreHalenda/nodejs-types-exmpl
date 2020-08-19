import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    return [
      '/vendors/all, Get',
      '/vendors/:id, GET',
      '/vendors/new-vendor, POST',
      '/vendors/:id, PUT',
      '/vendors/:id, DELETE',
      '/products/all, GET',
      '/products/:id, GET',
      '/products/new-product',
      '/products/:id, PUT',
      '/products/:id, DELETE',
      '/products/name/:name, GET',
      '/products/vendor/:vendor, GET',
    ]
  }
}