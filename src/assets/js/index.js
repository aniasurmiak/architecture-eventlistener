import "@scss/styles.scss"
import { noteStorage } from "./Storage"

import { domElements } from "./helper"

const { addNoteButton, addNoteInput, noteDiv } = domElements

addNoteButton.addEventListener("click", () => {
  const note = addNoteInput.value
  if (note) {
    noteStorage.emit("addItem", note)
    addNoteInput.value = ""
  }
})

//docoument.querySelector.addEventListener("click", () => { })
