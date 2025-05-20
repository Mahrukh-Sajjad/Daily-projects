let cityInput = document.querySelector("input");
let Btn = document.querySelector("button");
let infoCard = document.querySelector(".card1");
let apiKey = "a042809193a548fc94c4cb2db1a67f90";
let unsplashKey = "MpcLv_hgcTLB0wbLYtuh_VEKm9Qi3pESm7a1M4VC2aY";

function getCityInfo(cityName) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      cityName
    )}&key=${apiKey}`
  ).then((raw) => {
    if (!raw.ok) {
      throw new Error("Network problem");
    }
    return raw.json();
  });
}

function getCityImage(cityName) {
  return fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      cityName
    )}&client_id=${unsplashKey}`
  ).then((raw) => {
    console.log(raw);
    if (!raw.ok) {
      throw new Error("Network problem");
    }
    return raw.json();
  });
}

function decorateForm(details, imageUrl) {
  let formInterface = `
  <div class="card">
  <div class="card-content">

        <img class="city-img" src=${imageUrl} alt="" />

        <h1 class="city-name">${details.results[0].components.city}</h1>
        <h4 class="country-name">${details.results[0].components.country}</h4>
        <div class="stats">
          <div class="st">
            <h3>Continent:</h3>
            <h4>${details.results[0].components.continent}</h4>
          </div>
          <div class="st">
            <h3>State:</h3>
            <h4>${details.results[0].components.state}</h4>
          </div>
          <div class="st">
            <h3>Latitude:</h3>
            <h4>${details.results[0].geometry.lat}</h4>
          </div>
          <div class="st">
            <h3>Longitude:</h3>
            <h4>${details.results[0].geometry.lng}</h4>
          </div>
        </div>
      </div>
      </div>`;
  infoCard.innerHTML = formInterface;
}

// Btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let cityName = cityInput.value.trim();
//   console.log(cityName);
//   getCityInfo(cityName)
//     .then((data) => {
//       decorateForm(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   getCityImage(cityName)
//     .then((data) => {
//       console.log(data);
//       decorateForm(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

Btn.addEventListener("click", function (e) {
  e.preventDefault();
  let cityName = cityInput.value.trim();
  console.log(cityName);
  getCityInfo(cityName)
    .then((data) => {
      console.log(data);
      return getCityImage(cityName).then((imageData) => {
        const imageUrl =
          imageData.results.length > 0
            ? imageData.results[0].urls.regular
            : "https://via.placeholder.com/400x300?text=No+Image+Found"; // fallback image
        decorateForm(data, imageUrl);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
