import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products_by_category: Product[] | undefined;

  searchInput: string = '';

  constructor(private route: ActivatedRoute) { }

  share(id: number) {

    const url = "http://localhost:4200/products/" + id;
    const message = "Надо надо надо купить";
    const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;

    window.location.href = telegramLink;

  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.products_by_category = products.filter(products => products.categoryId === categoryIdFromRoute);
  }

  likeProduct(product: Product): void {
    product.likes += 1;
  }

  deleteProduct(product: Product): void {
    // @ts-ignore
    const index = this.products_by_category.indexOf(product);
    if (index > -1) {
      // @ts-ignore
      this.products_by_category.splice(index, 1);
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/