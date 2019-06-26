import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  message = "Help yourselves out!";
  message2 = "Please take your time";
  selectedProduct;
  localStorage;
  apiProducts;

  newTshirt: Product = {
    name: "Polo round neck",
    brand: "Polo",
    id: 1,
    price: 199
  };
  items;

  constructor(
    public httpService: HttpService,
    public productService: ProductService,
    public router: Router
  ) {}

  ngOnInit() {
    this.items = this.productService.getProducts();
    this.httpService.getProduct().subscribe(resp => {
      this.apiProducts = resp["data"];
      console.log(resp);
    });
  }

  selectProduct(item) {
    // localStorage.item = item.name;
    // this.selectedProduct = item;
    this.router.navigate(["product/" + item.id]);
  }
}
