// generating the sticky notes by buttonpress
document.getElementById("addNote").addEventListener("click", () => {
    // creating the note
    const note = document.createElement("div")
    note.className = "note"
    document.getElementById("noteDiv").appendChild(note)

     // generate random color for the note
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
     note.style.background = "#"+randomColor

    // creating textarea on note
    const input = document.createElement("textarea");
    const button = document.createElement("button");
    input.name = "post";
    input.maxLength = "200";
    input.cols = "12";
    input.rows = "5";
    input.style.background = "#"+randomColor

    button.innerHTML = "X"
    button.className = "clearButton"

    note.appendChild(input);
    note.appendChild(button);

    // add clearing listener to the button on the note
    button.addEventListener("click", () => {
        document.getElementById("noteDiv").removeChild(note)
    })
})