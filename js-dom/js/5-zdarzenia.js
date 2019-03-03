let header = document.querySelector('header');
let parFirst = document.querySelector('#parFirst')
let parSecond = document.querySelector('.parSecond');
let h1 = document.getElementById('main-header');
let link = document.querySelector('a[href="http://akademia108.pl"]')

link.onclick =event => {
    event.preventDefault();
    console.log(event.target);
}
console.log(link
    
    )
colorChange = () => {
    header.style.color = 'red';
    console.log ('click z <header></header>')
}

h1.onclick = event => {
    event.stopPropagation();
    console.log('cilck z <h1><</h1>')
}

ondblclick = () => {  
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = ondblclick;

najechanieMyszka = () => {
    // parFirst.style.backgroundColor = 'blue';
    parFirst.classList.toggle('toggle');
}

// parFirst.addEventListener('mouseover' , najechanieMyszka () =>{
//     parFirst.style.background
// })Color = 'blue';


parFirst.addEventListener('mouseover', najechanieMyszka)


// parFirst.removeEventListener('mouseover', najechanieMyszka );

