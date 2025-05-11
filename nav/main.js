import {saveMethod} from '../productspage/scripts/data.js';



const methodcards = document.querySelectorAll('.farmingmethod');

const images = document.querySelectorAll(".image");
let index = 0;
let id, id1;
//document.addEventListener('DOM content loaded',initial)
initial();

function initial() {
  images[index].classList.add('display');
  nextslide();
}

function nextslide() {
  if (index >= 2) {
    index = 0;
  }
  else {
    index++;
  }
  id=setInterval(showslide,5000);
}

function showslide(){
  images.forEach(image => {
    image.classList.remove('display');
  });
  images[index].classList.add('display');
  clearInterval(id);
  nextslide();
};


document.getElementById('latest-tools').addEventListener('click',()=>{
  localStorage.setItem('categorycrop','');
  window.location.href='../productspage/products.html';
});




methodcards.forEach((methodcard)=>{
  methodcard.addEventListener('click',()=>{
    let methodname = methodcard.querySelector('h3').textContent;
    saveMethod(methodname);
  });
  
});