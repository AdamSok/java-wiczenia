let header = document.querySelector('header')
// header.innerHTML = '<a href="#">nowy link w header</a>'


header.lastElementChild.textContent  = 'Span w headerze !';

let link = document.querySelector('.link .superlink')

link.classList.add('nowa-klasa')

console.log(link.classList);
