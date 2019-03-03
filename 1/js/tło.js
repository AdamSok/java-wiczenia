let input = document.querySelector('input');
let paragraf1 = document.getElementsByTagName('p')[0]
let paragraf2 = document.getElementsByTagName('p')[1];

input.onclick =event => {
    event.preventDefault();
    paragraf1.style.color = 'red';
    paragraf2.style.color = 'red';
}
