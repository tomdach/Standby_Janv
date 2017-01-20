//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function() {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

  skipClickDelay = function(e) {
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr = function(el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function(e) {
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

function changer() {
document.getElementById('h1').innerHTML = 'Welcome';
document.getElementById('zet').innerHTML = 'spoil n°1';
document.getElementById('zet1').innerHTML = 'spoil n°2';
document.getElementById('zet2').innerHTML = 'spoil n°3';
document.getElementById('zet3').innerHTML = 'spoil n°4';
document.getElementById('h2').innerHTML = 'Formulaire';
document.getElementById('a1').innerHTML = 'Nom';
document.getElementById('a2').innerHTML = 'email';
document.getElementById('a3').innerHTML = 'message';
document.getElementById('a4').innerHTML = 'sujet';
document.getElementById('a5').innerHTML = 'envoie';
document.getElementById('b1').innerHTML = 'Il ne vas plus avoir de Zombie dans la saison 19 car Darill les aurras manger en pensant que cest des chess';
document.getElementById('b2').innerHTML = 'Megan va bruler avec ses copain';
document.getElementById('b3').innerHTML = 'Il va avoir des alliens qui va envaire la terre et vont etre copain avec les Rodders';
document.getElementById('b4').innerHTML = 'Glenn est pas mort car il va apparaitre dans la saison 16 en dessant du mickeal jackson';
//document.getElementById('').innerHTML = '';

document.getElementById('img').style.display="inline";
setTimeout(dispImg,500);
}

function dispImg()
{
    document.getElementById('img').style.display="none";
}

    function verif(chars, type)
    {
        // Caractères autorisés
        regex = new RegExp('[a-z0-9'+ (type ? '@.' : '') +']$', 'i');
        if(!chars.value.match(regex))
        chars.value = chars.value.substr(0, chars.value.length - 1);

       
    }

function valid()
{
  $('#myModal').modal('show');
}

