/*
XML
*/

<select name="select" id="select" > 
  <option value="value1">2017</option>
  <option value="value2">2018</option>
  <option value="value3">2019</option>
</select>

<button class="btn j-btn-request">Загрузить отчет</button>
<div class="result j-result">Результат</div>

        <table style="width:20%">
            <tr><td>1 кв.</td> <td>2 кв.</td> <td>3 кв.</td> <td>4 кв.</td></tr>
            <tr id = "output"></tr>
        </table>

		<div id="graf"></div>
		
/*
CSS
*/

.btn {

  text-transform: uppercase;
  color: white;
  background: #315efb;
  font-size: 12px;
  transition: 0.3s;
  cursor: pointer;
}

/*
JS
*/

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
  
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};
 
const n = document.getElementById("select").options.selectedIndex;
const val = document.getElementById("select").options[n].text;
//console.log(n,val);
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request')
const graf = document.getElementById("graf")

function displayResult(apiData) {
  
  document.getElementById("output").innerHTML = `<td>${apiData[n].sales["q1"]}</td> <td>${apiData[n].sales["q2"]}</td> <td>${apiData[n].sales["q3"]}</td> <td>${apiData[n].sales["q4"]}</td>`;
  document.getElementById("graf").innerHTML = `<p><a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${val} год',data:[${apiData[n].sales["q1"]}, ${apiData[n].sales["q2"]}, ${apiData[n].sales["q3"]}, ${apiData[n].sales["q4"]}]}]}}" target="_blank">График</a></p>`
  
  var xhr = new XMLHttpRequest();
  var url = ''
  xhr.open('GET', url);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
  
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
  
};

btnNode.addEventListener('click', () => {
  useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
} )