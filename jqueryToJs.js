/* ---------------------------------- manipulate DOM ---------------------------------- */

document.querySelector('.myclass'); //IE8 +
// = $('.myclass');

document.querySelector('input[type=button]');
// = $('input[type=button]');

document.querySelectorAll('.note, .alert'); //IE8 +
// = $('.note, .alert');

document.getElementsByClassName('comment'); //the faster one
// = $('.comment');

document.querySelectorAll('#conteneur li');
// = document.getElementById('conteneur').getElementsByTagName('li');
// = $('#conteneur li');

document.getElementsByClassName("maClasse taClasse"); //!IE8
// = $('.maClasse .taClasse');

/* ---------------------------------- Insert element ---------------------------------- */

document.insertAdjacentHTML('beforeBegin', '<li></li>');
document.insertAdjacentHTML('afterBegin', '<li></li>');
document.insertAdjacentHTML('beforeEnd', '<li></li>');
document.insertAdjacentHTML('afterEnd', '<li></li>');

/* ---------------------------------- Manipulate element ---------------------------------- */

//add paragraph
document.getElementById('content').innerHTML += "<p>Paragraphe ajouté</p>";
// = $('#content').append("<p>Paragraphe ajouté</p>");

//create element
var div = document.createElement('div');
div.id = 'monId';
document.body.appendChild(div);

//empty element
document.getElementById('container').innerHTML = null;
// = while (c.lastChild) c.removeChild(c.lastChild);
// = $('#container').empty();

//delete element
var elem = document.getElementById("myDiv");
elem.parentNode.removeChild(elem);

//add text
var c = document.getElementById('container');
c.textContent = 'texte'; =
$('#container').text('texte');

/* ---------------------------------- Manipulate class & attributes ---------------------------------- */

document.getElementById('foo').className += 'bold';
// = $('#foo').addClass('bold');

document.getElementById('foo').classList.remove('bold'); //!IE9
// = $('#foo').removeClass('bold');

document.getElementById('foo').setAttribute('role', 'button');

document.body.classList.contains('home');
// = $(body).hasClass('home')

/* ---------------------------------- Events ---------------------------------- */

someElement.addEventListener('click', function(e) {
    e.stopPropagation();
});

someElement.removeEventListener('click', myEventHandler);

/* ---------------------------------- Shortcut function ---------------------------------- */

var selector = function(el) {
    return document.querySelectorAll(el);
};
selector('.myClass');

/* ---------------------------------- Chain function ---------------------------------- */

function myObj() {
    this.state = {
        a: 1
    };
    this.method1 = function() {
        alert("1");
        return this;
    }
    this.method2 = function() {
        alert("2");
        return this;
    }
    this.method3 = function() {
        alert("3");
        return this;
    }
    this.method4 = function() {
        alert(JSON.stringify(this.state));
    }
}

var obj = new myObj();
obj.method1().method2().method3().method4();

//if ($('.maclass').is('.class'))
