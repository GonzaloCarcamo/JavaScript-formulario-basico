var form = document.querySelector('#form');
var div = document.querySelector('#register');
div.style.display = "none";

form.addEventListener('submit', function(){
var name = document.querySelector('#name').value;
var city = document.querySelector('#city').value;


var listName = document.createElement('p');
var listCity = document.createElement('p');
listName.append(`Nombre: ${name}`);
listCity.append(`Ciudad: ${city}`);

if(name.trim() == null || name.trim().length == 0 ||
    city.trim() == null || city.trim().length == 0 ){
    alert('Uno o varios datos son incorrectos');
    div.style.display = "block";
} else {

    div.append(listName);
    div.append(listCity);

    div.style.display = "block";

}

});


