function myFirstfunction() {
    alert("Hello!!");
}

function mySecondfunction() {
    var requestURL = 'http://api.icndb.com/jokes/random';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var objJS = request.response;
        addInfo(objJS);
    }

    function addInfo(objJS) {
        var currentSection = document.getElementById('info');

        var p1 = document.createElement('p');
        p1.textContent = objJS.type;
        currentSection.appendChild(p1);

        var p2 = document.createElement('p');
        p2.textContent = objJS.value.id;
        currentSection.appendChild(p2);

        var p3 = document.createElement('p');
        p3.textContent = objJS.value.joke;
        currentSection.appendChild(p3);
    }
}

var params = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'application/json'})
}

function myRepofunction(params) {
    let url = 'https://api.github.com/search/repositories?q=javascript',
        request = new Request(url, params),

        currentAside = document.getElementById('repositories'),
        currentUl = document.getElementById('list');

    currentAside.appendChild(currentUl);

    fetch(request)
        .then(request => request.json())
        .then(list => {
            for (let i = 0; i < list.items.length; i++) {
                let full_name = document.createElement('li');
                currentUl.appendChild(full_name);
            }
        })
        .catch(() => {
            console.error('Something went wrong');
        })
}

function search() {
    let input = document.getElementById('text_search').value.toLowerCase(),
        output = document.getElementById('id_texts').options;

    for (let i = 0; i < output.length; i++) {
        if (output[i].value.indexOf(input) == 0) {
            output[i].selected = true;
        }

        if (document.forms[0].text_search.value == '') {
            output[0].selected = true;
        }
    }
}

function genera_tabla() {
  var body = document.getElementsByTagName('body')[0];
  var tabla   = document.createElement('table');
  var tblBody = document.createElement('tbody');
  for (var i = 0; i < 2; i++) {
    var hilera = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
      var celda = document.createElement('td');
      var textoCelda = document.createTextNode('gel polish');
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute('border', '2');
}
