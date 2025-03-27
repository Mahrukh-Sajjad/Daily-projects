var fortunes = [
  "🍀 Luck is on your side today!",
  "✨ A golden opportunity is coming your way!",
  "🌟 Your hard work will soon be rewarded!",
  "💖 A pleasant surprise awaits you!",
  "🚀 Success is closer than you think!",
  "🎉 Happiness and joy are heading your way!",
  "🎯 Focus on your dreams—they're within reach!",
  "💰 Financial prosperity is in your near future!",
  "🌈 A bright and lucky moment is just ahead!",
  "🔥 Believe in yourself—something amazing will happen!",
];
var btn = document.querySelector("button");
var image = document.querySelector("#imgs");
var showingFortune = false;
btn.addEventListener("click", function () {
  //   var num = Math.floor(Math.random() * fortunes.length);
  //   image.innerHTML = `<h2>${fortunes[num]}</h2>`;
  //   btn.textContent = "Back";

  if (!showingFortune) {
    // Show Fortune
    var num = Math.floor(Math.random() * fortunes.length);
    image.innerHTML = `<h2>${fortunes[num]}</h2>`;
    btn.textContent = "Back";
    showingFortune = true;
  } else {
    // Show Original Image
    image.innerHTML = `<div class="card">
        <div id="imgs">
        
          <img src="./images.png" alt="" />
          </div>
        </div>`;
    btn.textContent = "Get Fortune";
    showingFortune = false;
  }
});
