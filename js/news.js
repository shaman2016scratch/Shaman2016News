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
    <a href="/news/1"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/388"><button>Смотреть пост</button></a>
    <p>Опубликовано 30.10.2025 в 22:50:57 UTC+3</p>
  </div>
  <div class="project">
    <h3>SMS от телеграма и WhatsApp были заблокированы в России</h3>
    <p>Российские операторы стали блокировать SMS от Telegram и WhatsApp. Подробности.</p>
    <p>От SHAMAN2016</p>
    <a href="/news/2"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/389"><button>Смотреть пост</button></a>
    <p>Опубликовано 30.10.2025 в 22:55:22 UTC+3</p>
  </div>
  <div class="project">
    <h3>Интерграм опубликовал планы для intergramX.</h3>
    <p>Сегодня Интерграм опубликовал планы и структуру intergramX. Подробнее в статье</p>
    <p>От SHAMAN2016</p>
    <a href="/news/3"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/399"><button>Смотреть пост</button></a>
    <p>Опубликовано 31.10.2025 в 13:08:26 UTC+3</p>
  </div>
  <div class="project">
    <h3>Интерграм анонсировал Intergram-QR</h3>
    <p>Интерграм выпустил первую версию Intergram-QR. Подробности в статье</p>
    <p>От SHAMAN2016</p>
    <a href="/news/4"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/405"><button>Смотреть пост</button></a>
    <p>Опубликовано 31.10.2025 в 22:16:04 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript — новый язык программирования!</h3>
    <p>RussiaScript — Новый русский язык программирования. Подробности в статье</p>
    <p>От SHAMAN2016</p>
    <a href="/news/5"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/419"><button>Смотреть пост</button></a>
    <p>Опубликовано 02.11.2025 в 21:21:10 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript 1.1 оффициально вышел</h3>
    <p>RussiaScript 1.1 вышел оффициально, подробности</p>
    <p>От SHAMAN2016</p>
    <a href="/news/6"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/422"><button>Смотреть пост</button></a>
    <p>Опубликовано 03.11.2025 в 14:24:16 UTC+3</p>
  </div>
  <div class="project">
    <h3>Началась разработка RussiaScript 1.2</h3>
    <p>Что нового а также подробности</p>
    <p>От SHAMAN2016</p>
    <a href="/news/7"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/432"><button>Смотреть пост</button></a>
    <p>Опубликовано 04.11.2025 в 22:24:53 UTC+3</p>
  </div>
`
innerHTML('news', news)
