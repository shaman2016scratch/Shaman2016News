try {
  const NewYear = false
  const NewYearMode = 2
  const url = new URL(window.location)
  const searchParams = url.searchParams
  let NewYearFunc = {}
  if (searchParams.get("NewYearMode") || NewYear) {
    document.getElementById('NewYear').innerHTML = "<p>Happy New Year!</p><p>We say goodbye to the outgoing year 2025 and look forward to the coming year 2026!</p><p>Прощаемся с уходящим 2025 годом, а также приветствуем и радуемся наступающему 2026 году</p>"
  } else if (NewYearMode === 0) {
    document.getElementById('NewYear').innerHTML = "<p>Скоро новый год! The new year is coming soon!</p>"
  } else if (NewYearMode === 1) {
    document.getElementById('NewYear').innerHTML = "<p>С новым 2026 годом! Старый год прошел и наступил 2026!</p>"
  } else {
    document.getElementById('NewYear').innerHTML = "";
  }
} catch (err) {
  alert(`Error when executing NewYear.js: ${err.message}`)
}
