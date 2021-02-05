var myName = '';

// Определяем текущее время
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hh = today.getHours();
var min = today.getMinutes();
today = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + min;


// Проверяем, было ли посещение
let lastVisit = localStorage.getItem('lastVisit');

//console.log('1. lastVisit', lastVisit);

// Если не было посещения, то
if (lastVisit == null) {
  // Спросим имя
  let myName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
  // Запишем имя
  localStorage.setItem('myName', myName);
  //console.log('2. myName', myName);

  // Запишем время
  localStorage.setItem('lastVisit', today);
  //console.log('3. lastVisit', today);

} else {
  console.log('Добрый день, ' + myName + '! Давно не виделись. В последний раз вы были у нас ' + today);
    // Запишем время
  localStorage.setItem('lastVisit', today);
  //console.log('4. lastVisit', today);
}
  

//localStorage.clear();



/*

Написать скрипт, который при открытии страницы будет делать следующее:

если пользователь зашел в первый раз, вывести окно prompt с сообщением:

«Добро пожаловать! Назовите, пожалуйста, ваше имя».

После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.

Подсказка: для определения текущей даты используйте new Date().
Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage), вывести в alert сообщение вида:

«Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас *дата последнего посещения*»

и перезаписать дату последнего посещения.

Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).

*/