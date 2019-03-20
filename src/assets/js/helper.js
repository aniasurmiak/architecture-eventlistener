// Helper
import { noteStorage } from "./Storage"

export const $ = selector => document.querySelector(selector)
export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  noteDiv: null
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map(
      (note, index) => {
        return `
        <div class="note col-lg-6" id=${index} title= 
        "click to remove">
         <span> ${note} </spam>
        </div>
      `
      }
    )
    .join("")
  domElements.noteDiv = document.querySelectorAll(".note")
  targetNotes()
}
const targetNotes = () => {

  const targetNotes = document.querySelectorAll('.note');
  if (domElements.noteDiv !== null)
    domElements.noteDiv.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {

        noteStorage.emit("removeItem", oneDiv.id)
      })
    })
} 