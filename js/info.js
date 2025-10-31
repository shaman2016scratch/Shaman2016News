function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
toppanel = `
  <a href="/shaman2016.github.io/">Сайт SHAMAN2016</a>
  <a href="/Shaman2016News">Shaman2016News</a>
  <a href="https://t.me/s/shaman2016scratcher?q=%23Shaman2016News">Посты</a>
`
innerHTML('top-panel', toppanel)
