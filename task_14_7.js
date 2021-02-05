/*
HTML
*/

<h1>Fetch</h1>
<input class="inp" id="input" type="number" min="1" max="11"> Введите id пользователя</input>
<br></br>
<button class="btn j-btn">Запрос данных</button>
<ol id="todos"></ol>


/*
CSS
*/
.btn {
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  
  margin: 5px 10px;
  padding: 10px 15px;
  border-radius: 1px;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: white;
  background: #315efb;
  transition: 0.3s;
}

.btn:hover {
  box-shadow: 0px 2px 8px 2px rgba(141,150,178,.3);
  transform: scale(1.05);
}
.inp{
width: 50px;
height: 30px;
border-radius: 5px;
border:2px solid #7C5961;
}


/*
JS
*/
	
const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  let txt = document.getElementById("input").value;
  let todos = document.getElementById("todos");
  // Проверка на существование пользователя
  if ( txt < 1 || txt > 10 ) {
    alert('Пользователь с указанным id = ' + txt + ' не найден');
    return;
  } else {
    fetch(`https://jsonplaceholder.typicode.com/users/${txt}/todos`)
    .then((response) => response.json())
    .then((data) => {
     if (data.length != 0) {
       let output = "";
       
        for ( i = 0; i < data.length; i ++) {
		// Если выполнено, то зачеркиваем
          output += data[i].completed ?  `<li><strike>${data[i].title}</strike></li>` : `<li>${data[i].title}</li>`
		    };
       
       todos.innerHTML = output;
  }
  })
  }
  });