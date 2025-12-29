NewYear = false
NewYearMode = 0
const url = new URL(window.location)
const getpar = url.searchParams
let NewYearFunc = {}
if (getpar.get("NewYearMode") || NewYear) {
  txt = "<p>Happy New Year!</p><p>We say goodbye to the outgoing year 2025 and look forward to the coming year 2026!</p><p>Прощаемся с уходящим 2025 годом и приветствуем и радуемся наспцмающему 2026 году</p>"
  document.getElementMyId('NewYear').innerHTML = txt
} else if (NewYearMode === 0) {
  txt = "<p>Скоро новый год! The new year is coming soon!</p>"
  document.getElementMyId('NewYear').innerHTML = txt
} else if (NewYearMode === 1) {
  txt = "<p>С наступающим годом! Happy new year 2026!</p>"
  document.getElementMyId('NewYear').innerHTML = txt
}
