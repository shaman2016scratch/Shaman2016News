const url = new URL(window.location)
const searchParams = url.searchParams
let user = searchParams.get('user')
const users = [
  "SHAMAN2016",
  "UpdateBot",
]
const user_info = {
  "SHAMAN2016": {
    "colvostat": 12
  }
}
if (user === 'SHAMAN2016' || user === 'polzovatel_8787' || user === 8787 || user === "8787" || user === "shaman2016") {
  document.getElementById('title').textContent = 'SHAMAN2016 • Shaman2016News Profiles'
  document.getElementById('ogtitle').content = 'SHAMAN2016'
  document.getElementById('ogdesc').content = 'SHAMAN2016 profile in Shaman2016News'
  document.getElementById('desc').content = 'Профиль SHAMAN2016 в Shaman2016News'
  document.getElementById('title2').textContent = 'SHAMAN2016 • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Привет! Я SHAMAN2016, скретчер из России! Также я web разработчик и JavaScript разработчик!</p><p>Также я создатель Shaman2016News</p><p>Мой сайт: shaman2016scratch.github.io (да, Shaman2016News размещен на нём)</p>'
  document.getElementById('Vklad').innerHTML = '<p>Создал 10 статей</p><p>Создал категории, профиля и саму площадку</p><p>Делал новогодний режим в 2025 году</p>'
  document.getElementById('Dostizhenia').innerHTML = `<p>Создатель</p><p>Программист</p><p>Новостной (${user_info.SHAMAN2016.colvostat}/5 статей)</p>`
} else if (user === 'UpdateBot') {
  document.getElementById('title').textContent = 'UpdateBot • Shaman2016News Profiles'
  document.getElementById('ogtitle').content = 'UpdateBot'
  document.getElementById('ogdesc').content = 'UpdateBot profile in Shaman2016News'
  document.getElementById('desc').content = 'Профиль UpdateBot в Shaman2016News'
  document.getElementById('title2').textContent = 'UpdateBot • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Добро пожаловать в профиль UpdateBot [bot]</p><p>UpdateBot выкладывает статьи о обновлениях на shaman2016scratch.github.io/Shaman2016News/*.</p>'
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
