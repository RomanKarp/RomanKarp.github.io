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
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.'); //вызов окна с полем ввода
  localStorage.setItem('name', myName); // API которое позволяет хранить данные
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}