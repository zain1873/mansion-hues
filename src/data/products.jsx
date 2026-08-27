// Sab products ka data yahan hai.
// Abhi static hai — baad mein isi shape ka data Django API se aayega,
// bas neeche wali array ko fetch() se replace karna hoga, baaki
// components (Casualcollections, ProductPage) mein kuch change nahi karna parega.

import image1 from "../assets/cloths/image-1.webp";
import image2 from "../assets/cloths/image-2.webp";
import image3 from "../assets/cloths/image-3.webp";
import image4 from "../assets/cloths/image-4.webp";

import imagehover1 from "../assets/cloths/image-1-hover.webp";
import imagehover2 from "../assets/cloths/image-2-hover.webp";
import imagehover3 from "../assets/cloths/image-3-hover.webp";
import imagehover4 from "../assets/cloths/image-4-hover.webp";

const products = [
  {
    id: 1,
    name: "2 Pc Printed Cambric Suit",
    sku: "MB-MN26-08-BLACK-EX LARGE",
    price: "Rs.6,990.00",
    rewardMin: "Rs. 280",
    rewardMax: "Rs. 699",
    image: image1,
    hoverImage: imagehover1,
    // Gallery images (product page ke liye). Backend se jitni bhi
    // images aayengi, ye array utni hi lambi ho jayegi aur gallery
    // apne aap adjust ho jayegi.
    images: [image1, imagehover1, image1, imagehover1],
    composition: "2 Piece - Shirt & Trouser",
    shirtDetail: "Printed Straight Shirt",
    details: [
      "Fabric: Cambric",
      "Wash Care: Dry clean only",
      "Country of Origin: Pakistan",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 2,
  },
  {
    id: 2,
    name: "2 PC Embroidered Slub Lawn Suit",
    sku: "MB-MN26-09-BLUE-M",
    price: "Rs.7,290.00",
    rewardMin: "Rs. 290",
    rewardMax: "Rs. 729",
    image: image2,
    hoverImage: imagehover2,
    images: [image2, imagehover2, image2, imagehover2],
    composition: "2 Piece - Shirt & Trouser",
    shirtDetail: "Embroidered Slub Lawn Shirt",
    details: [
      "Fabric: Slub Lawn",
      "Wash Care: Machine wash cold",
      "Country of Origin: Pakistan",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 3,
    name: "2 PC Dyed Crosshatch Suit",
    sku: "MB-MN26-10-GREY-L",
    price: "Rs.5,990.00",
    rewardMin: "Rs. 240",
    rewardMax: "Rs. 599",
    image: image3,
    hoverImage: imagehover3,
    images: [image3, imagehover3, image3, imagehover3],
    composition: "2 Piece - Shirt & Trouser",
    shirtDetail: "Dyed Crosshatch Shirt",
    details: [
      "Fabric: Crosshatch",
      "Wash Care: Dry clean only",
      "Country of Origin: Pakistan",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 8,
  },
  {
    id: 4,
    name: "Printed Lawn Shirt",
    sku: "MB-MN26-11-WHITE-S",
    price: "Rs.4,290.00",
    rewardMin: "Rs. 170",
    rewardMax: "Rs. 429",
    image: image4,
    hoverImage: imagehover4,
    images: [image4, imagehover4, image4, imagehover4],
    composition: "1 Piece - Shirt",
    shirtDetail: "Printed Lawn Shirt",
    details: [
      "Fabric: Lawn",
      "Wash Care: Machine wash cold",
      "Country of Origin: Pakistan",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 3,
  },
  {
    id: 5,
    name: "Printed Lawn Shirt",
    sku: "MB-MN26-12-WHITE-M",
    price: "Rs.4,290.00",
    rewardMin: "Rs. 170",
    rewardMax: "Rs. 429",
    image: image4,
    hoverImage: imagehover4,
    images: [image4, imagehover4, image4, imagehover4],
    composition: "1 Piece - Shirt",
    shirtDetail: "Printed Lawn Shirt",
    details: [
      "Fabric: Lawn",
      "Wash Care: Machine wash cold",
      "Country of Origin: Pakistan",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 3,
  },
];

export default products;