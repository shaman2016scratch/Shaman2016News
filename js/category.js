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
if (categ === categories[0]) {
  document.getElementById('title').textContent = 'Categories • Shaman2016News Categories'
  document.getElementById('ogtitle').content = 'Categories'
  document.getElementById('ogdesc').content = '"Categories" category in Shaman2016News'
  document.getElementById('desc').content = 'Категория "Категории" в Shaman2016News'
  document.getElementById('title2').textContent = 'Categories • Shaman2016News Categories'
  document.getElementById('info').innerHTML = '<p>Это категория со списком категорий в Shaman2016News</p>'
  document.getElementById('stati').innerHTML = `<p>Нум... Тут не статьи а категории, но держи: ${categories}</p>`
} else if (categ === categories[1]) {
  document.getElementById('title').textContent = 'IT • Shaman2016News Categories'
  document.getElementById('ogtitle').content = 'IT'
  document.getElementById('ogdesc').content = '"IT" category in Shaman2016News'
  document.getElementById('desc').content = 'Категория "IT" в Shaman2016News'
  document.getElementById('title2').textContent = 'IT • Shaman2016News Categories'
  document.getElementById('info').innerHTML = '<p>Добро пожаловать в категорию IT-статей!</p>'
  document.getElementById('stati').innerHTML = `<p>Эм... Тут пока нет статей</p>`
} else if (categ === categories[2]) {
  document.getElementById('title').textContent = 'News • Shaman2016News Categories'
  document.getElementById('ogtitle').content = 'News'
  document.getElementById('ogdesc').content = '"News" category in Shaman2016News'
  document.getElementById('desc').content = 'Категория "Новости" в Shaman2016News'
  document.getElementById('title2').textContent = 'News • Shaman2016News Categories'
  document.getElementById('info').innerHTML = '<p>Добро пожаловать в категорию новостей!</p>'
  document.getElementById('stati').innerHTML = `<p>Эм... Тут пока нет статей</p>`
} else {
  document.getElementById('title').textContent = `${categ} • Shaman2016News Categories`
  document.getElementById('ogtitle').content = categ
  document.getElementById('ogdesc').content = `${categ} category in Shaman2016News`
  document.getElementById('desc').content = `Категория "${categ}" в Shaman2016News`
  document.getElementById('title2').textContent = `${categ} • Shaman2016News Categories`
  document.getElementById('info').innerHTML = '<p>Данная категория не найдена. 404</p>'
}
