const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");

let notesStorage;

if (localStorage.getItem("notes")) {
    notesStorage = JSON.parse(localStorage.getItem("notes"));
} else {
    notesStorage = [];
}

noteForm.addEventListener("submit", (e) => {
// e.preventDefault();
notesStorage.push(noteInput.value);
localStorage.setItem("notes", JSON.stringify(notesStorage));
listBuilder(noteInput.value);
noteInput.value = "";
});

const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    notes.appendChild(note);
  };

const getNotes = JSON.parse(localStorage.getItem("notes"));
getNotes.forEach((note) => {
listBuilder(note);
});

const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    el.remove();
  };