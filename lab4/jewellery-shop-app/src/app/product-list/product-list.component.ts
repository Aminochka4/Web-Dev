import { Component } from '@angular/core';

import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(id: number) {

    const url = "http://localhost:55230/products/" + id; // URL-адрес вашей веб-страницы
    const message = "Надо надо надо купить"; // Текст сообщения
  
    const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;
  
    // Перенаправление в Telegram
    window.location.href = telegramLink;
  
    // Оповещение (необязательно)
    // window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/