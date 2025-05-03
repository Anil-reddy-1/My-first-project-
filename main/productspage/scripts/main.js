import {data,cartitems,addtocart,cartitemcount,savecart, categorycrop} from './data.js';

//Window.addtocart=addtocart;
 


document.getElementById('cart-item-number').textContent=cartitemcount;

document.addEventListener(`DOMContentLoaded`,()=>{
 
 if (categorycrop==='') {
   
 data.forEach((item) => {
  htmlgenerator(item);
});

//if block end
 }
 else {
   data.forEach((item) => {
     item.category.forEach((category)=>{
       if (category===categorycrop) {
         htmlgenerator(item);
     }
  });
     //data for eacn end
     });
     //else block end
     }
});


document.getElementById('cart-icon').addEventListener('click',()=>window.location.href='/productspage/cart.html');



function htmlgenerator(item) {
  const productscontainer=document.getElementById('container');
 
 
  const card = document.createElement('div');
card.className = 'product-card';
card.innerHTML = `
  
    <img class="product-image" src="${item.imagesrc}" alt="image of product" />
    <h4 class="product-title">${item.Name}</h4>
    <p class="product-discription">${item.discription}</p>
    
    <div class="bottomcard">
      <button class="card-Price">₹${item.price}/-</button>
      <button class="cart-button">Add to Cart</button>
    </div>
  `;

card.querySelector('.cart-button').addEventListener('click', () => {
  event.stopPropagation();
  addtocart(item.productID, 1);
});


card.addEventListener('click', () => {
  localStorage.setItem('selectedproduct', JSON.stringify(item));
  window.location.href = './detailproduct.html';
});

productscontainer.appendChild(card);
   
}