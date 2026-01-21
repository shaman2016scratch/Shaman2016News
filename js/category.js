const url = new URL(window.location)
const searchParams = url.searchParams
let categ = searchParams.get('name')
const categories = [
  "categories",
  "news",
  "it",
  "scratch",
  "telegram",
  "users",
]
if (categ === categories [0]) {
  document.getElementById('title').textContent = 'Categories • Shaman2016News Categories'
  document.getElementById('ogtitle').content = 'Categories'
  document.getElementById('ogdesc').content = '"Categories" category in Shaman2016News'
  document.getElementById('desc').content = 'Категория "Категории" в Shaman2016News'
  document.getElementById('title2').textContent = 'Categories • Shaman2016News Categories'
  document.getElementById('info').innerHTML = '<p>Это категория со списком категорий в Shaman2016News</p>'
  document.getElementById('stati').innerHTML = `<p>Нум... Тут не статьи а категории, но держи: ${categories}</p>`
} else {
  document.getElementById('title').textContent = `${categ} • Shaman2016News Categories`
  document.getElementById('ogtitle').content = categ
  document.getElementById('ogdesc').content = `${categ} category in Shaman2016News`
  document.getElementById('desc').content = `Категория "${categ}" в Shaman2016News`
  document.getElementById('title2').textContent = `${categ} • Shaman2016News Categories`
  document.getElementById('info').innerHTML = '<p>Данная категория не найдена. 404</p>'
}
