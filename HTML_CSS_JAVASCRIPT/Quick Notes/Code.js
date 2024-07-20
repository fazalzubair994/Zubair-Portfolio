let AddButton = document.getElementById("addnewbtn");
let noteContainer = document.querySelector(".noteContainer");
AddButton.addEventListener("click", addNewNote);

let OnLoaded = true;
let noteArray = [];
noteArray = JSON.parse(localStorage.getItem("NoteArray") || "[]");

function LoadNotes() {
  noteArray.forEach((noteValue) => {
    OnLoaded = true;
    let div = document.createElement("div");
    div.className = "cl";

    let noteNode = document.createElement("textarea");
    noteNode.value = noteValue;
    noteNode.id = "NoteArea";
    noteNode.placeholder = "Enter Your Note here...";

    div.appendChild(createAnchors("saveanchor", "Save"));
    div.appendChild(createAnchors("deleteanchor", "Delete"));

    div.appendChild(noteNode);
    addEventHandler(div);
    noteContainer.insertBefore(div, AddButton);
  });
}

function addNewNote() {
  let div = document.createElement("div");
  div.className = "cl";
  OnLoaded = false;

  let noteNode = document.createElement("textarea");
  noteNode.textContent = "";
  noteNode.id = "NoteArea";
  noteNode.placeholder = "Enter Your Note here...";

  div.appendChild(createAnchors("saveanchor", "Save"));
  div.appendChild(createAnchors("deleteanchor", "Delete"));

  div.appendChild(noteNode);
  addEventHandler(div);
  noteContainer.insertBefore(div, AddButton);
}

function createAnchors(id, text) {
  let Anchor = document.createElement("a");
  Anchor.id = id;
  Anchor.textContent = text;
  Anchor.href = "#";
  return Anchor;
}

function addEventHandler(div) {
  let deleteAnchor = div.querySelector("#deleteanchor");
  let saveAnchor = div.querySelector("#saveanchor");
  let textarea1 = div.querySelector("#NoteArea");

  deleteAnchor.addEventListener("click", () => {
    const trimmedValue = textarea1.value.trim(); // Trim the value to remove extra spaces

    if (textarea1.value === "") noteContainer.removeChild(div);
    else {
      let warning = confirm("Are you sure to delete this note");
      if (warning) deletenote(div, trimmedValue);
    }
  });
  if (OnLoaded) saveAnchor.style.visibility = "collapse";
  saveAnchor.addEventListener("click", () => {
    const noteValue = textarea1.value.trim();
    if (!noteArray.includes(noteValue)) {
      noteArray.push(noteValue);
      saveNoteArray();
      saveAnchor.style.visibility = "collapse";
    }
  });
}

function deletenote(div, trimmedValue) {
  const index = noteArray.findIndex((note) => note.trim() === trimmedValue);

  console.log(index);
  if (index > -1) {
    // Remove the note from the array
    noteArray.splice(index, 1);

    console.log(noteArray);
    // Update local storage
    saveNoteArray();

    // Remove the div from the DOM
    noteContainer.removeChild(div);
  }
}

// Function to save note array to local storage
function saveNoteArray() {
  localStorage.setItem("NoteArray", JSON.stringify(noteArray));
}

window.onload = LoadNotes;
