const getRandom = new Promise((resolve, reject) => {
    setTimeout(() => { 
    let num = Math.round(Math.random() * (100 - 1) + 1);
    if(num % 2 == 0) {
      resolve('Завершено успешно. Сгенерированное число — ' + num);
    } else {
      reject('Завершено с ошибкой. Сгенерированное число — ' + num);
    }
    }, 3000);

});
  
getRandom
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })