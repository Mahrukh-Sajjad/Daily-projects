const btn = document.querySelector("button");
const nameContainer = document.querySelector(".name");
const desContainer = document.querySelector(".description");
const imageContainer = document.querySelector(".image");

const foodItems = [
  {
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
  },
  {
    name: "Chicken Biryani",
    image:
      "https://plus.unsplash.com/premium_photo-1695029502961-f57f307bd0c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Aromatic basmati rice cooked with tender chicken, spices, and herbs.",
  },
  {
    name: "Sushi Platter",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    description:
      "A variety of fresh sushi rolls served with soy sauce, wasabi, and pickled ginger.",
  },
  {
    name: "Cheeseburger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description:
      "Juicy grilled beef patty topped with cheddar cheese, lettuce, tomato, and sauce in a bun.",
  },
  {
    name: "Caesar Salad",
    image:
      "https://images.unsplash.com/photo-1631572844996-17ad95563270?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
  },
  {
    name: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1621424093521-eec9a43df158?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Rich and moist chocolate layered cake topped with creamy frosting.",
  },
  {
    name: "Pasta Alfredo",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Creamy fettuccine pasta tossed in a smooth alfredo sauce with garlic and cheese.",
  },
  {
    name: "Tacos",
    image:
      "https://plus.unsplash.com/premium_photo-1681406995086-e60e5c306e6c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Crunchy taco shells filled with seasoned meat, veggies, salsa, and cheese.",
  },
];

function getName() {
  let random = Math.floor(Math.random() * foodItems.length);
  return new Promise((res, rej) => {
    res(foodItems[random]);
  });
}

function getImage(item) {
  return new Promise(function (res, rej) {
    res(item);
  });
}

function getDesc(item) {
  return new Promise(function (res, rej) {
    res(item);
  });
}

btn.addEventListener("click", function () {
  getName()
    .then(function (item) {
      console.log(item.name);
      let n = `<h1>${item.name}<h1>`;
      nameContainer.innerHTML = n;
      btn.textContent = "Something else";
      return getImage(item);
    })
    .then(function (item) {
      let Img = `<img src="${item.image}">`;
      imageContainer.innerHTML = Img;
      return getDesc(item);
    })
    .then(function (item) {
      let desc = `<p> ${item.description} </p>`;
      desContainer.innerHTML = desc;
    });
});
