let footer = document.createElement('footer');//<footer></footer>
let footerText = document.createTextNode('stpka strony') //stopka 

footer.appendChild(footerText);

footer.setAttribute('class', 'custom-footer');

document.querySelector('section').insertAdjacentElement('afterend', footer);

//console.log(footer);

let parSecond = document.querySelector('.parSecond');

document.body.firstElementChild.removeChild(parSecond);

// section.removeElement('header')
// document.body.removeChild(section)
