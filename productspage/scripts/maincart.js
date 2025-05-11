import {cartitems,data,savecart,deleteitem} from './data.js';

const container = document.getElementById("cart-container");

document.addEventListener('DOMContentLoaded',loadcartitems);

function loadcartitems(){

cartitems.forEach(cartitem => {
  data.forEach(item => {
    if (item.productID==cartitem.id){
let card=document.createElement('div');
  card.className='cart-card';
  card.innerHTML= `
     <div class="cart-image">
     <img class="images" src="${item.imagesrc}" alt="This is an image" width="100%">
     </div>  
    <div class="details">
       <div class="item-name">${item.Name}</div>
       <div class="item-price" >price:14000/-</div>
       <div class="item-quantity">Quantity:${cartitem.quantity}</div>
       
         <button class="delete-button" >Delete</button>
   </div>
  `;
  
  card.querySelector('.delete-button').addEventListener('click',()=>{
    deleteitem(item.productID,cartitem.quantity);
    card.remove();
  });

  document.getElementById('cart-container').appendChild(card);
}
});
});
}