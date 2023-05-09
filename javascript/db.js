const productsDB = [
  {
    id: 1,
    image: "image/1000_F_72468391_ZG4IwnysgIR3u3nkzQfdUtqrRJDFsFlH.jpg",
    type: "Fruit",
    name: "Orange Yellow",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 55000
  },
  {
    id: 2,
    image: "image/240_F_588647864_sLbMvX9h9TuIx9FCAiSDdZfTcY4vs81O.jpg",
    type: "Fish",
    name: "Salmon",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 100000
  },
  {
    id: 3,
    image: "image/1000_F_268073936_QK8vRSxbozhrIRFwvdMOVBHoVcqqqX27.jpg",
    type: "vegetabe",
    name: "Perch",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 25000
  },
  {
    id: 4,
    image: "image/1000_F_498789359_pRRsu95QmQR4CFsDNE7lVWfLTF5mRvwW.jpg",
    type: "Meat",
    name: "Beef",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 215000
  },
  {
    id: 5,
    image: "image/images (1).jpeg",
    type: "Crab",
    name: "King Crab",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 10,
    price: 1500000
  },
  {
    id: 6,
    image: "image/download (1).jpeg",
    type: "vegetabe",
    name: "Carrot",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 15000
  },
  {
    id: 7,
    image: "image/download.jpeg",
    type: "Meat",
    name: "Beef Wagyu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 20,
    price: 125000
  },
  {
    id: 8,
    image: "image/images (2).jpeg",
    type: "vegetabe",
    name: "Pottato",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 25000
  },
  {
    id: 9,
    image: "image/pexels-photo-14662515.jpeg",
    type: "Fruit",
    name: "Apple",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 25000
  },
  {
    id: 10,
    image: "image/istockphoto-147068981-612x612.jpg",
    type: "Meat",
    name: "Pork Ribs",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 250000
  },
  {
    id: 11,
    image: "image/1000_F_563984104_iGjGlcHA9p9FIRh2edt9VUsNkMBgVgAt.jpg",
    type: "vegetabe",
    name: "Name Product",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 35,
    price: 25000
  },
  {
    id: 12,
    image: "image/istockphoto-174075609-612x612.jpg",
    type: "Meat",
    name: "Pork",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 25,
    price: 125000
  },
  {
    id: 13,
    image: "image/1000_F_563984104_iGjGlcHA9p9FIRh2edt9VUsNkMBgVgAt.jpg",
    type: "vegetabe",
    name: "Name Product",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 35,
    price: 25000
  },
  {
    id: 14,
    image: "image/1000_F_563984104_iGjGlcHA9p9FIRh2edt9VUsNkMBgVgAt.jpg",
    type: "vegetabe",
    name: "Name Product",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 25000
  },
  {
    id: 15,
    image: "image/bing-cherries-ripe-red-fruit.webp",
    type: "Fruit",
    name: "Cherry",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: 5,
    price: 35000
  },
  {
    id: 16,
    image: "image/1000_F_563984104_iGjGlcHA9p9FIRh2edt9VUsNkMBgVgAt.jpg",
    type: "vegetabe",
    name: "Name Product",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris...",
    qty: 0,
    sale: "",
    price: 25000
  },
]
// localStorage.setItem('products', JSON.stringify(productsDB))
const objectProductList = JSON.parse(localStorage.getItem("products"));
if(!objectProductList){
    localStorage.setItem("products", JSON.stringify(productsDB));
}
