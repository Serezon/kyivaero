import React from 'react'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import youtube from '../../images/youtube.png'
import smplLogo from '../../images/smplLogo.png'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="information-blocks">
          <div className="information">
            <p className="title">Пассажирам</p>
            <ul>
              <li><a href="/">Расписание рейсов</a></li>
              <li><a href="/">Заказ услуг</a></li>
              <li><a href="/">Контактная информация</a></li>
              <li><a href="/">Политика конфиденциальности</a></li>
              <li><a href="/">Карта сайта</a></li>
            </ul>
          </div>
          <div className="information">
            <p className="title">Партнерам</p>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/">Наземное обслуживание</a></li>
              <li><a href="/">Характеристики аэродрома</a></li>
              <li><a href="/">Учебный центр</a></li>
              <li><a href="/">Вакансии</a></li>
            </ul>
          </div>
          <div className="information">
            <p className="title">Пресс-центр</p>
            <ul>
              <li><a href="/">Главная пресс-центра</a></li>
              <li><a href="/">Последние новости</a></li>
              <li><a href="/">Социальные и арт проекты</a></li>
              <li><a href="/">Финансовая отчетность</a></li>
              <li><a href="/">Статистика пассажиропотока</a></li>
            </ul>
          </div>
          <div className="information reference">
            <p className="title">Звоните в авиасправку</p>
            <a href="tel:+380443644514" className="phone">+38 (044) 364-45-14</a>
            <p>Присоединяйтесь к нам</p>
            <ul className="soc-network">
              <li><a href="/"><img src={facebook} alt=""></img></a></li>
              <li><a href="/"><img src={twitter} alt=""></img></a></li>
              <li><a href="/"><img src={instagram} alt=""></img></a></li>
              <li><a href="/"><img src={youtube} alt=""></img></a></li>
            </ul>
          </div>
        </div>
        <div className="captions">
          <div className="captions-info">
            <div className="info copyrights">
              <p>&copy; 2011-2019</p>
              <p>Международный аэропорт &laquo;Киев&raquo;</p>
            </div>
            <div className="info investment">
              <a href="/">Part of
                <span> Ufuture <br/> Investment Group</span>
              </a>
            </div>
          </div>
          <div className="site-development">
            <div className="info">
              <p>Разработка сайта</p>
              <a href="/"><img src={smplLogo} alt="logo"/> </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;