function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
news = fetch("https://shaman2016scratch.github.io/Shaman2016News/api/NewsList2.js", {  
  method: 'GET',  
  headers: { 
    "Content-Type": "application/json",  
  }
})
innerHTML('news', news)
