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
                console.log(full_name.textContent = list.items[i].full_name);
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

function myTablerepo(toTable = [
    'gel polish',     '$270',
    'reg polish',     '$135',
    'nail file',      '$30'
]) {
    let myTable = document.getElementById('table'),
        tr1 = document.createElement('tr'),
        tr2 = document.createElement('tr'),
        tr3 = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td'),
        td3 = document.createElement('td'),
        td4 = document.createElement('td'),
        td5 = document.createElement('td'),
        td6 = document.createElement('td');

    td1 = document.createTextNode(toTable[0] + ' ');
    td2 = document.createTextNode(toTable[1]);

    tr1.appendChild(td1);
    tr1.appendChild(td2);

    td3 = document.createTextNode(toTable[2] + ' ');
    td4 = document.createTextNode(toTable[3]);

    tr2.appendChild(td3);
    tr2.appendChild(td4);

    td5 = document.createTextNode(toTable[4] + ' ');
    td6 = document.createTextNode(toTable[5]);

    tr3.appendChild(td5);
    tr3.appendChild(td6);

    myTable.appendChild(tr1);
    myTable.appendChild(tr2);
    myTable.appendChild(tr3);
}
