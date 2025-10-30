function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
newsList = fetch("https://shaman2016scratch.github.io/Shaman2016News/api/NewsList.js", {  
  method: 'GET',  
  headers: { 
    "Content-Type": "application/json",  
  }
})
news = "<h2>Статьи</h2>"
for(i = 0; i < newsList.length; i++) {
  ii = newsList[i]
  news = `${news}<div class="project"><h3>${ii.name}</h3><p>${ii.description}</p><p>by ${ii.creator}</p><a href="/Shaman2016News/news/${ii.id}">Открыть статью</a><a href="${ii.post}">Открыть пост</a></div>`
  console.log(i)
}
innerHTML('news', news)
