let menu = document.querySelector('.menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');       
    menu.classList.remove('active');
    cartItem.classList.remove('active');
}


