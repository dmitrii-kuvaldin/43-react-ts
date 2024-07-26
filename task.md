### Самостоятельная работа Weather App React


1. Основные этапы указаны в  [[презентации](Lesson14_React_Weather_App.pdf)]
2. Пройдите регистрацию в API `https://openweathermap.org/`
3. Верстайте согласно макету в figma `https://www.figma.com/design/SNX4eptdtM5Lf7VkGR5KTp/Weather.app?node-id=0-1&t=BaRkLlijpaB92mzs-1`
4. Команда старта нового проекта `npx create-react-app my-first-ts --template typescript`
5. Запрос на получение данных по городу `https://api.openweathermap.org/data/2.5/weather?q=leipzig&appid=<место для ключа>`
6. Для получения картинок используйте `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
7. Обязательно обработайте ошибку несуществующего города
