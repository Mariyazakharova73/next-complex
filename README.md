### next-complex

#### О проекте

[Ссылка на макет](https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&mode=design&t=JUcQzutaQKE6kRJw-0)

Что сделано

- адаптация под мобильные устройства и планшеты
- получены данные отзывов и товаров
- первая страница товаров отображается сразу, остальные подргужаются по мере прокрутки вниз
- при нажатии на кнопку "купить", она меняется на кнопки "+","-" и поле ввода, значение поля становится 1
- кнопки добавляют, убавляют количество товаров
- в поле ввода можно вписать любое количество
- при изменении кол-ва меняется информация в корзине
- набранные товары и номер сохраняются при перезагрузке страницы
- маска в поле для телефона
- валидация номера телефона
- попап с информацией о запросе (загрузка, успешное выполнение, ошибка)
- если в корзине нет товара, кнопка "заказать" блокируется
- верстка без использования сторонних библиотек

Что можно улучшить

- При прокрутке до последней страницы не отображать компонент LoadMore
- Добавить скелетоны для карточек
- Поработать над оптимизацией приложения
- Разделить код на более мелкие компоненты
- Поработать над блокировкой xss атак (желательно валидировать отзыв перед отправкой на сервер)

#### Технологии

<div>
<img height='25px' src="https://img.shields.io/badge/Next.js-20232A??style=plastic&logo=nextdotjs&logoColor=fff" alt="Nextjs.">
  <img height='25px' src="https://img.shields.io/badge/React-20232A??style=plastic&logo=react&logoColor=61DAFB" alt="React.">
  <img height='25px' src="https://img.shields.io/badge/TypeScript-20232A??style=plastic&logo=typescript&logoColor=3178C6" alt="TypeScript.">
  <img height='25px' src="https://img.shields.io/badge/Redux Toolkit-20232A??style=plastic&logo=redux&logoColor=764ABC" alt="Redux.">
</div>

#### Установка и запуск приложения

Клонировать репозиторий (версия node.js v20.11.1):

    git clone https://github.com/Mariyazakharova73/next-complex.git

Установить зависимости:

    npm install

Запустить проект:

    npm run dev
