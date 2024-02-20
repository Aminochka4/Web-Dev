export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img1: string;
  img2: string;
  img3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Серьги "Vannelli"',
    price: 6252.75,
    description: 'проба 750, материал золото, вставка бриллиант и рубин, страна производитель Армения, вес изделия 13.0 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/hf5/84653831913502.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hd6/84653831979038.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h36/h97/84653832044574.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/ser-gi-vannelli-23761940-ves-13-g-zoloto-rubin-brilliant-115138562/?c=351010000&sr=5&ref=shared_link',
  },
  {
    id: 2,
    name: 'Подвеска "Armat"',
    price: 5842.57,
    description: 'проба 750, материал золото, вставка бриллиант и рубин, страна производитель Армения, вес изделия 6.29 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h09/85191982481438.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h82/85191982546974.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/hf1/85191982612510.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/podveska-armat-pk00102-ves-6-29-g-zoloto-brilliant-rubin-116686365/?c=351010000&sr=10&ref=shared_link',
  },
  {
    id: 3,
    name: 'Серьги Золото России',
    price: 5205.18,
    description: 'проба 585, материал золото, вставка бриллиант и рубин, страна производитель Россия, вес изделия 6.5378 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h2b/85182731583518.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h0a/85182731649054.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h6d/85182731780126.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/ser-gi-zoloto-rossii-3-3070204-ves-6-5378-g-zoloto-brilliant-rubin-116667841/?c=351010000&sr=15&ref=shared_link',
  },
  {
    id: 4,
    name: 'Комплект "Darid Jewellery"',
    price: 2667.84,
    description: 'проба 750, материал золото, вставка бриллиант и рубин, страна производитель Италия, вес изделия 12.0 г',
    rating: 0.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h69/82073695682590.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h15/82073696174110.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h63/82073696927774.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/darid-jewellery-3124-ves-12-g-18-5-zoloto-rubin-brilliant-111946729/?c=351010000&sr=94&ref=shared_link',
  },
  {
    id: 5,
    name: 'Колье Александра',
    price: 2184.29,
    description: 'проба 585, материал золото, вставка фианит и гранат, страна производитель Россия, длина 50.0 см, вес изделия 25.0 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h2f/68738804219934.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h7a/68738809790494.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h8d/68738825125918.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/kol-e-aleksandra-p1202-34-dlina-50-sm-ves-25-g-zoloto-fianit-granat-108790268/?c=351010000&sr=152&ref=shared_link',
  },
  {
    id: 6,
    name: 'Комплект SOKOLOV',
    price: 3181.40,
    description: 'проба 585, материал золото, вставка бриллиант и рубин, страна производитель Россия, вес изделия 7.89 г',
    rating: 4.5,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h86/84532343996446.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/he7/84532344061982.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h57/84532344193054.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sokolov-4020479-4010683-ves-7-89-g-17-5-zoloto-rubin-brilliant-114717429/?c=351010000&sr=63&ref=shared_link',
  },
  {
    id: 7,
    name: 'Кольцо SOKOLOV',
    price: 2890.16,
    description: 'проба 585, материал золото, вставка бриллиант и рубин, страна производитель Россия, размер 17, вес изделия 3.58 г',
    rating: 4.5,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h34/64510910496798.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h81/64510978981918.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/h10/64510981996574.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sokolov-4010694-3-17-17-3-58-g-zoloto-brilliant-rubin-105320757/?c=351010000&sr=80&ref=shared_link',
  },
  {
    id: 8,
    name: 'Кольцо "Алтын Кбр"',
    price: 3463.43,
    description: 'проба 585, материал золото, вставка бриллиант и рубин, страна производитель Россия, размер 17, вес изделия 2.78 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/hee/80157274734622.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h71/he5/80157276373022.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/he0/hc8/80157278011422.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/altyn-kbr-bg1260dr4122-razmer-17-ves-2-78-g-zoloto-rubin-109920734/?c=351010000&sr=52&ref=shared_link',
  },
  {
    id: 9,
    name: 'Комплект ADILZHANV',
    price: 2223.20,
    description: 'проба 585, материал золото, вставка бриллиант и гранат, страна производитель Италия, вес изделия 13.68 г',
    rating: 5.0,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/he3/hce/65970561450014.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h59/hf6/65970894110750.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h74/h88/65970896994334.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/adilzhan-gold-g00265-ves-13-68-g-18-zoloto-brilliant-granat-107658540/?c=351010000&sr=145&ref=shared_link',
  },
  {
    id: 10,
    name: 'Серьги SOKOLOV',
    price: 3334.81,
    description: 'проба 585, материал золото, вставка бриллиант и рубин, страна производитель Россия, вес изделия 6.52 г',
    rating: 4.5,
    img1: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hd0/65084028354590.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/hd0/65084030976030.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h59/65084032155678.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/ser-gi-sokolov-4020702-3-ves-6-52-g-zoloto-brilliant-rubin-105374998/?c=351010000&sr=60&ref=shared_link',
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/