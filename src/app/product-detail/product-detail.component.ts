import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {}
  selectedProduct;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.selectedProduct = this.productService.getProductById(params["id"]);
    });
  }
}
