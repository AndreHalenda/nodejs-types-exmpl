import { ProductController } from "../product.controller";
import { ProductService } from "../product.service";
import { Product } from "../product.schema";
import { Model } from "mongoose";


describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  let productSchema: Model<Product, {}>;

  beforeEach(() => {
    productService = new ProductService(productSchema);
    productController = new ProductController(productService);
  });

  describe('getAllProducts', () => {
    it('should return an array of products', async () => {
      let result: Promise<Product[]>;
      jest.spyOn(productService, 'findAll').mockImplementation(() => result);

      expect(await productController.getAllProducts()).toBe(result);
    });
  });
});