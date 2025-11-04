docData = {}
docData.theme = document.getElementById('theme')
docData.css = document.getElementById('css')
theme = localStorage.getItem('theme')
if (!theme) {
  localStorage.setItem('theme', 'light')
}
theme = localStorage.getItem('theme')
themeCSS = {
  "light": "main.css",
  "dark": "main2.css",
}
themeIcon = {
  "light": "/DeytelengScript/tema-1.svg",
  "dark": "/DeytelengScript/tema-2.svg",
}
function UpdateTheme(th) {
  docData.theme.innerHTML = themeIcon[th]
  docData.css.href = themeCSS[th]
}
UpdateTheme(theme)
function updateTheme() {
  if (theme === 'dark') {
    theme = 'light'
  } else {
    theme = 'dark'
  }
  UpdateTheme(theme)
}
