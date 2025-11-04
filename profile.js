const url = new URL(window.location)
const searchParams = url.searchParams
user = searchParams.user
users = [
  "SHAMAN2016",
]
if (user == 'SHAMAN2016') {
  document.getElementById('title').textContent = 'SHAMAN2016 • Shaman2016News Profiles'
  document.getElementById('ogtitle').content = 'SHAMAN2016'
  document.getElementById('ogdesc').content = 'SHAMAN2016 profile in Shaman2016News'
  document.getElementById('desc').content = 'Профиль SHAMAN2016 в Shaman2016News'
  document.getElementById('title2').textContent = 'SHAMAN2016 • Shaman2016News profiles'
  document.getElementById('info').innerHTML = '<p>Привет! Я SHAMAN2016, скретчер из России! Также я web разработчик и JavaScript разработчик!</p><p>Такде я создатель Shaman2016News</p>'
}
