let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Tarvuz",
    image: "watermelon.jpg",
    price: `${`1 kg 3 999 so'm dan`}`,
  },
  {
    id: 2,
    name: "Pepsi Cola Cola 1.5 0.5 6 000 so'm",
    image: "pepsi.jpg",
    price: 16999,
  },
  {
    id: 3,
    name: "flash",
    image: "flesh.jpg",
    price: 13999,
  },
  {
    id: 4,
    name: "Tovun",
    image: "Melon.jpg",
    price: `${`1 kg 6 999`}`,
  },
  {
    id: 5,
    name: "Non",
    image: "non.webp",
    price: 26000,
  },
  {
    id: 6,
    name: "Pizza",
    image: "Pizza.jpg",
    price: 120000,
  },
  {
    id: 7,
    name: "Tuz",
    image: "tuz.jpg",
    price: 12000,
  },
  {
    id: 8,
    name: "Yog'",
    image: "yog.jpg",
    price: `${`20000 1liter va 4000 liter`}`
  },
  {
    id: 9,
    name: "Gosht",
    image: "gosht.avif",
    price: `${`14000 1 kg qo'y mol 12000`}`
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
