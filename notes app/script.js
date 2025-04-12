var Title = document.querySelector("input");
var Note = document.querySelector("textarea");
var savebtn = document.querySelector(".save");
var clearbtn = document.querySelector(".clear");

savebtn.addEventListener("click", function (e) {
  e.preventDefault();
  var titleValue = Title.value.trim();
  var noteValue = Note.value.trim();

  if (titleValue == "" || noteValue == "") {
    alert("Enter Both Title and Notes");
    return;
  }
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNote = {
    title: titleValue,
    note: noteValue,
  };
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
  Title.value = "";
  Note.value = "";
  alert("Notes saved");

  const notes1 = JSON.parse(localStorage.getItem("notes"));
  console.log(notes1);
  var notesContainer = document.querySelector(".notes-container");
  function hero() {
    sum = "";
    notes1.forEach(function (e, idx) {
      sum =
        sum +
        `<div class="dnotes">
            <p>${e.note}</p>
            <button id="${idx}">delete</button>
  
              </div>`;
    });

    notesContainer.innerHTML = sum;
  }
  // sum = "";
  // notes1.forEach(function (e, idx) {
  //   sum =
  //     sum +
  //     `<div class="dnotes">
  //         <p>${e.note}</p>
  //         <button id="${idx}">delete</button>

  //           </div>`;
  // });
  // var notesContainer = document.querySelector(".notes-container");
  // notesContainer.innerHTML = sum;
  hero();
  notesContainer.addEventListener("click", function (dets) {
    var gold = notes1[dets.target.id];
    console.log(gold);
    notes1.splice(gold, 1);
    localStorage.setItem("notes", JSON.stringify(notes1));
    hero();
  });
});

clearbtn.addEventListener("click", function () {
  localStorage.removeItem("notes");
});
