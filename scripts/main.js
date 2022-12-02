var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eins.png') {
      myImage.setAttribute ('src','images/zwei.png');
    } else {
      myImage.setAttribute ('src','images/eins.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.'); //вызов окна с полем ввода
  localStorage.setItem('name', myName); // API которое позволяет хранить данные
  myHeading.textContent = 'Willkommen, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Willkommen, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var randomNumber = Math.floor(Math.random() * 100) + 1;