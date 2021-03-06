import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  items: Product[] = [
    { name: "iPhone SE", brand: "Apple", id: 2, price: 520.1 },
    { name: "Nokia8100", brand: "Nokia", id: 3, price: 100 },
    { name: "Huawei P30", brand: "Huawei", id: 4, price: 3999 },
    { name: "Samsung S20", brand: "Samsung", id: 5, price: 2999 }
  ];

  constructor() {}

  getProducts() {
    return this.items;
  }

  getProductById(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i]["id"] == id) {
        return this.items[i];
      }
    }
    return null;
  }
}
