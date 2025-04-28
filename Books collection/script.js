let Button = document.querySelector("button");

class Book {
  constructor(title, author, image) {
    this.title = title;
    this.author = author;
    this.image = image;
  }
}

let habits = new Book(
  "Atomic Habits",
  "James Clear",
  "https://static-01.daraz.pk/p/6c047f3545bce96bffc4277def796303.jpg"
);
let theSlightEdge = new Book(
  "The Slight Edge",
  "Jeff Olson",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXezZHtQ1yioZ36kfBLmAvOBFnPkCfJX9s-Q&s"
);
let oneThing = new Book(
  "The One Thing",
  " Gary Keller",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEzwcEXOC1fupZQN_K6Gk2seKqfqLbDgjaQ&s"
);
let work = new Book(
  "Deep Work",
  "Cal Newport",
  "https://static-01.daraz.pk/p/40e44c4673798f0ad2beb608f2f8a912.jpg"
);
let influence = new Book(
  "Influence",
  "Robert B. Cialdini",
  "https://kitabbazaar.pk/cdn/shop/files/B6810BC9-7889-449D-92C9-910FB3F7949F.png?v=1719850006"
);
let drive = new Book(
  "Drive",
  "Daniel H. Pink",
  "https://i0.wp.com/richardwbown.com/wp-content/uploads/2023/11/daniel_pink_drive.jpg?fit=1200%2C1658&ssl=1"
);

Button.addEventListener("click", function (e) {
  let checkBoxes = document.querySelectorAll("input:checked");
  e.preventDefault();
  let arr = [];
  checkBoxes.forEach(function (checkbox) {
    arr.push(checkbox.value);
  });
  console.log(arr);
  let arr2 = [];

  arr.forEach(function (book) {
    if (book == "AtomicHabbits") {
      var obj1 = {
        title: habits.title,
        author: habits.author,
        image: habits.image,
      };
      arr2.push(obj1);
    } else if (book == "Slight") {
      var obj2 = {
        title: theSlightEdge.title,
        author: theSlightEdge.author,
        image: theSlightEdge.image,
      };
      arr2.push(obj2);
    } else if (book == "Thing") {
      var obj3 = {
        title: oneThing.title,
        author: oneThing.author,
        image: oneThing.image,
      };
      arr2.push(obj3);
    } else if (book == "Deep") {
      var obj4 = {
        title: work.title,
        author: work.author,
        image: work.image,
      };
      arr2.push(obj4);
    } else if (book == "Influence") {
      var obj5 = {
        title: influence.title,
        author: influence.author,
        image: influence.image,
      };
      arr2.push(obj5);
    } else {
      var obj6 = {
        title: drive.title,
        author: drive.author,
        image: drive.image,
      };
      arr2.push(obj6);
    }
  });
  console.log(arr2);
  let sum = "";
  let inputCard = document.querySelector(".main");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("container");

  arr2.forEach(function (elem) {
    sum =
      sum +
      `<div class="card1">
      <div class="card2">
      <img src=${elem.image} alt="">
      <h2>${elem.title}</h2>
      <h3>${elem.author}</h3>
      </div>
    </div>`;
  });
  inputCard.innerHTML = sum;
});
