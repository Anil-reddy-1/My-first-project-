import {cropdata, categorycrop} from '../productspage/scripts/data.js';



cropdata.forEach((crop)=>{
  const cropcard=document.createElement('div');
  cropcard.className='box';
  cropcard.innerHTML=`
            <div class="box1">
            <img src="${crop.imagesrc}" alt="this is an image" class="image1">
            </div>
            <div class="box2">
               <h3 class="crop-name">${crop.Name}</h3>
            </div>
  `;
  
  cropcard.addEventListener('click',()=>{
    
   
   localStorage.setItem('categorycrop',crop.Name);
   window.location.href='../productspage/products.html';
  });
  
  document.getElementById('crop-container').appendChild(cropcard);
});



