const url = new URL(window.location)
const searchParams = url.searchParams
let categ = searchParams.get('name')
const categories = [
  "Categories",
  "News",
  "IT",
  "Scratch",
  "Telegram",
  "users",
]
if (categ === 'SHAMAN2016') {
  document.getElementById('title').textContent = 'SHAMAN2016 • Shaman2016News Profiles'
  document.getElementById('ogtitle').content = 'SHAMAN2016'
  document.getElementById('ogdesc').content = 'SHAMAN2016 profile in Shaman2016News'
  document.getElementById('desc').content = 'Профиль SHAMAN2016 в Shaman2016News'
  document.getElementById('title2').textContent = 'SHAMAN2016 • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Привет! Я SHAMAN2016, скретчер из России! Также я web разработчик и JavaScript разработчик!</p><p>Также я создатель Shaman2016News</p><p>Мой сайт: shaman2016scratch.github.io (да, Shaman2016News размещен на нём)</p>'
  document.getElementById('Vklad').innerHTML = '<p>Создал 10 статей</p><p>Создал категории, профиля и саму площадку</p><p>Делал новогодний режим в 2025 году</p>'
  document.getElementById('Dostizhenia').innerHTML = '<p>Создатель</p><p>Программист</p><p>Новостной (10/5 статей)</p>'
} else {
  document.getElementById('title').textContent = `${user} • Shaman2016News Profiles`
  document.getElementById('ogtitle').content = user
  document.getElementById('ogdesc').content = `${user} profile in Shaman2016News`
  document.getElementById('desc').content = `Профиль ${user} в Shaman2016News`
  document.getElementById('title2').textContent = `${user} • Shaman2016News profiles`
  if (user === "all") {
    document.getElementById('info').innerHTML = users
  } else {
    document.getElementById('info').innerHTML = '<p>Данный профиль не найден. 404</p>'
  }
}
