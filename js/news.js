function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
news = `
  <h2>Статьи</h2>
  <div class="project">
    <h3>Турбоварп заблокировали в России</h3>
    <p>TurboWarp был заблокирован на теретории Российской Федерации</p>
    <p>От SHAMAN2016</p>
    <a href="/Shaman2016News/news/1"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/388"><button>Смотреть пост</button></a>
  </div>
  <div class="project">
    <h3>SMS от телеграма и WhatsApp были заблокированы в России</h3>
    <p>Российские операторы стали блокировать SMS от Telegram и WhatsApp. Подробности.</p>
    <p>От SHAMAN2016</p>
    <a href="/Shaman2016News/news/2"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/389"><button>Смотреть пост</button></a>
  </div>
  <div class="project">
    <h3>Интерграм опубликовал планы для intergramX.</h3>
    <p>Сегодня Интерграм опубликовал планы и структуру intergramX. Подробнее в статье</p>
    <p>От SHAMAN2016</p>
    <a href="/Shaman2016News/news/3"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/399"><button>Смотреть пост</button></a>
  </div>
`
innerHTML('news', news)
