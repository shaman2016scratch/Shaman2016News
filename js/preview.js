let title = document.getElementById("titlePage")
let page = document.getElementById("page")
const url = new URL(window.location)
const sP = url.searchParams
let pagee = sp("page")
const pages = {
  "news1": {
    "title": "",
    "content": ``
  }
}
if (false) {
  console.error("JS is broken, it executes if (false).")
} else {
  page.innerHTML = `
    <h1>Preview Pages</h1>
    <p>This is a feature for pre-viewing articles without opening them.</p>
  `
}
