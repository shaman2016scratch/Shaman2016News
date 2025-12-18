const url = new URL(window.location)
const searchParams = url.searchParams
user = searchParams.get('user')
users = [
  "SHAMAN2016",
  "UpdateBot",
]
if (user == 'SHAMAN2016') {
  document.getElementById('title').textContent = 'SHAMAN2016 • Shaman2016News Profiles'
  document.getElementById('ogtitle').textContent = 'SHAMAN2016'
  document.getElementById('ogdesc').textContent = 'SHAMAN2016 profile in Shaman2016News'
  document.getElementById('desc').textContent = 'Профиль SHAMAN2016 в Shaman2016News'
  document.getElementById('title2').textContent = 'SHAMAN2016 • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Привет! Я SHAMAN2016, скретчер из России! Также я web разработчик и JavaScript разработчик!</p><p>Также я создатель Shaman2016News</p><p>Мой сайт: shaman2016scratch.github.io (да, Shaman2016News размещен на нём)</p>'
} else if (user == 'UpdateBot') {
  document.getElementById('title').textContent = 'UpdateBot • Shaman2016News Profiles'
  document.getElementById('ogtitle').textContent = 'UpdateBot'
  document.getElementById('ogdesc').textContent = 'UpdateBot profile in Shaman2016News'
  document.getElementById('desc').textContent = 'Профиль UpdateBot в Shaman2016News'
  document.getElementById('title2').textContent = 'UpdateBot • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Добро пожаловать в профиль UpdateBot [bot]</p><p>UpdateBot выкладывает статьи о обновлениях на shaman2016scratch.github.io/Shaman2016News/*.</p>'
}

