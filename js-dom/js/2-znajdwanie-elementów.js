let element;

element = document.getElementById('section-first');//po 
element = document.getElementsByClassName('link ')[document.getElementsByClassName('link').length - 1]; //po klasach
element = document.getElementsByTagName('p')[0]; //po tagu
 element = document.querySelector('#section-first .parSecond .par2').innerHTML; //po quarrySelector
element = document.querySelectorAll('#section-first a')[2].innerHTML   //po quarrySelectroall;                      
element = document.getElementById('main-header').parentElement;
element = document.getElementById('main-header').parentElement.children;
element = document.querySelector('header').firstElementChild
element = document.querySelector('header').lastElementChild


console.log(element)
