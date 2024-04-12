function savenote(note) {
    localStorage.setItem("note", note)
}
let note = localStorage.getItem("note");
if (note) {
    document.querySelector(".container").innerHTML = note;
}

document.querySelector("button").addEventListener("click", () => {
    let note = prompt("Enter your note")
    savenote(note);
    document.querySelector(".container").innerHTML = note;
})