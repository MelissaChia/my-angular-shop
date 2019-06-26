import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(public httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get("https://reqres.in/api/products");
  }
}
