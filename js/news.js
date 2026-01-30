function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
news = `
  <p>Предложить новости можно в предложке Telegram-канала <a href="https://shaman2016scratcher.t.me/">создателя Shaman2016News</a></p>
  <div class="project">
    <h3>Турбоварп заблокировали в России</h3>
    <p>TurboWarp был заблокирован на теретории Российской Федерации</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/1"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/388"><button>Смотреть пост</button></a>
    <p>Опубликовано 30.10.2025 в 22:50:57 UTC+3</p>
  </div>
  <div class="project">
    <h3>SMS от телеграма и WhatsApp были заблокированы в России</h3>
    <p>Российские операторы стали блокировать SMS от Telegram и WhatsApp. Подробности.</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/2"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/389"><button>Смотреть пост</button></a>
    <p>Опубликовано 30.10.2025 в 22:55:22 UTC+3</p>
  </div>
  <div class="project">
    <h3>Интерграм опубликовал планы для intergramX.</h3>
    <p>Сегодня Интерграм опубликовал планы и структуру intergramX. Подробнее в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/3"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/399"><button>Смотреть пост</button></a>
    <p>Опубликовано 31.10.2025 в 13:08:26 UTC+3</p>
  </div>
  <div class="project">
    <h3>Интерграм анонсировал Intergram-QR</h3>
    <p>Интерграм выпустил первую версию Intergram-QR. Подробности в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/4"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/405"><button>Смотреть пост</button></a>
    <p>Опубликовано 31.10.2025 в 22:16:04 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript — новый язык программирования!</h3>
    <p>RussiaScript — Новый русский язык программирования. Подробности в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/5"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/419"><button>Смотреть пост</button></a>
    <p>Опубликовано 02.11.2025 в 21:21:10 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript 1.1 оффициально вышел</h3>
    <p>RussiaScript 1.1 вышел оффициально, подробности</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/6"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/422"><button>Смотреть пост</button></a>
    <p>Опубликовано 03.11.2025 в 14:24:16 UTC+3</p>
  </div>
  <div class="project">
    <h3>Началась разработка RussiaScript 1.2</h3>
    <p>Что нового а также подробности</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/7"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/432"><button>Смотреть пост</button></a>
    <p>Опубликовано 04.11.2025 в 22:24:53 UTC+3</p>
  </div>
  <div class="project">
    <h3>Котоблоки в Скретче теперь платные?</h3>
    <p>Теперь в Скретче можно получить котоблоки когда угодно с помощью Membership, что это значит, подробности и детали, и что будет при использовании аддонов? Читайте в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/8"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/838"><button>Смотреть пост</button></a>
    <p>Опубликовано 13.12.2025 в 16:22:27 UTC+3</p>
  </div>
  <div class="project">
    <h3>Скретч стал коммерческим?</h3>
    <p>Стал ли Скретч коммерческим, из-за Membership? Продробнее в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/9"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/1019"><button>Смотреть пост</button></a>
    <p>Опубликовано 18.12.2025 в 11:10:47 UTC+3</p>
  </div>
 <div class="project">
    <h3>Релиз sosirsOS Alpha 2.0</h3>
    <p>Релиз sosirsOS Alpha, что известно и подробности а также планы на будущее.</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/10"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/1054"><button>Смотреть пост</button></a>
    <p>Опубликовано 21.12.2025 в 15:41:16 UTC+3</p>
  </div>
 <div class="project">
    <h3>Новогоднее обновление Shaman2016News (30.12.2025)</h3>
    <p>Новогоднее обновление Shaman2016News</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/11"><button>Смотреть статью</button></a>
    <button onclick="alert("Поста нет")">Поста нет</button>
    <p>Опубликовано 30.12.2025 в 21:59:00 UTC+3</p>
  </div>
  <div class="project">
    <h3>Обновление Shaman2016News 22.01.2026</h3>
    <p>Обнолвение: Dev-версия, категории и многое другое!</p>
    <p>От <a href="/Shaman2016News/profile.html?user=UpdateBot">UpdateBot [Bot]</a></p>
    <a href="/Shaman2016News/news/12"><button>Смотреть статью</button></a>
    <button>Поста нет</button>
    <p>Опубликовано 22.01.2026 в 13:36 UTC+3</p>
  </div>
  <div class="project">
    <h3>Планы на sosirsOS Server 2026.3</h3>
    <p>Планы на sosirsOS Server 2026.3. что появится, читайое в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/13"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/1608">Смотреть пост</a>
    <p>Опубликовано 30.01.2026 в 13:53 UTC+3</p>
  </div>
`
itNews = `
  <div class="project">
    <h3>Турбоварп заблокировали в России</h3>
    <p>TurboWarp был заблокирован на теретории Российской Федерации</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/1"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/388"><button>Смотреть пост</button></a>
    <p>Опубликовано 30.10.2025 в 22:50:57 UTC+3</p>
  </div>
  <div class="project">
    <h3>Интерграм анонсировал Intergram-QR</h3>
    <p>Интерграм выпустил первую версию Intergram-QR. Подробности в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/4"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/405"><button>Смотреть пост</button></a>
    <p>Опубликовано 31.10.2025 в 22:16:04 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript — новый язык программирования!</h3>
    <p>RussiaScript — Новый русский язык программирования. Подробности в статье</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/5"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/419"><button>Смотреть пост</button></a>
    <p>Опубликовано 02.11.2025 в 21:21:10 UTC+3</p>
  </div>
  <div class="project">
    <h3>RussiaScript 1.1 оффициально вышел</h3>
    <p>RussiaScript 1.1 вышел оффициально, подробности</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/6"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/422"><button>Смотреть пост</button></a>
    <p>Опубликовано 03.11.2025 в 14:24:16 UTC+3</p>
  </div>
  <div class="project">
    <h3>Началась разработка RussiaScript 1.2</h3>
    <p>Что нового а также подробности</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/7"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/432"><button>Смотреть пост</button></a>
    <p>Опубликовано 04.11.2025 в 22:24:53 UTC+3</p>
  </div>
  <div class="project">
    <h3>Релиз sosirsOS Alpha 2.0</h3>
    <p>Релиз sosirsOS Alpha, что известно и подробности а также планы на будущее.</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/10"><button>Смотреть статью</button></a>
    <a href="https://t.me/shaman2016scratcher/1054"><button>Смотреть пост</button></a>
    <p>Опубликовано 21.12.2025 в 15:41:16 UTC+3</p>
  </div>
`
snUpdates = `
 <div class="project">
    <h3>Новогоднее обновление Shaman2016News (30.12.2025)</h3>
    <p>Новогоднее обновление Shaman2016News</p>
    <p>От <a href="/Shaman2016News/profile.html?user=SHAMAN2016">SHAMAN2016</a></p>
    <a href="/Shaman2016News/news/11"><button>Смотреть статью</button></a>
    <button onclick="alert("Поста нет")">Поста нет</button>
    <p>Опубликовано 30.12.2025 в 21:59:00 UTC+3</p>
  </div>
  <div class="project">
    <h3>Обновление Shaman2016News 22.01.2026</h3>
    <p>Обнолвение: Dev-версия, категории и многое другое!</p>
    <p>От <a href="/Shaman2016News/profile.html?user=UpdateBot">UpdateBot [Bot]</a></p>
    <a href="/Shaman2016News/news/12"><button>Смотреть статью</button></a>
    <button>Поста нет</button>
    <p>Опубликовано 22.01.2026 в 13:36 UTC+3</p>
  </div>
`
innerHTML('news', news)
innerHTML('it-news', itNews)
