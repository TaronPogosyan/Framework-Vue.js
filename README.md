# ДЗ 1.

Данное задание направлено на подготовку проекта к итоговой аттестации.
По заданному макету https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=101-14&t=hPokjgMtIgcsYlyO-0 создать верстку главной страницы (без использования vue).

# ДЗ 2.

Продолжаем создание макета https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=209-15&t=VK2zHccBmhGGNIzu-0 Домашнее задание 2 страница Blog

Что мы можем заметить в проекте, что часть "Articles & News" повторяется, как итог, вам необходимо создать блок Articles & News с помощью vue.js где данные для вёрстки будут храниться в массиве объектов и выводить на страницу с помощью цикла v-for

Задание VUE
Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

# ДЗ 3.

Реализовать страницу Blog details

На странице отображается подробное описание статьи, а под ней размещаются остальные статьи

Необходимо на выборе Tags чтобы происходила сортировка статей по выбранному тегу. Тег можно выбрать только один

https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=541-13&t=mhOD6yhLJuH2Biy0-0

PS: С макетом можете плотно не работать, а реализовать только саму логику без макета. Дизайн внедрить можете позже.

По итогу должно быть три компонента:

1. blog-details (компонент отображения подробной информации о статье)
2. blog (компонент отображения краткой информации о статье в компоненте blogs-list)
3. blogs-list (компонент который выводит список из компонент blog и фильтрует его на основе выбранного тега)
