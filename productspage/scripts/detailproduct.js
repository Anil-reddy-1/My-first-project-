import {selectedproduct} from './data.js';

console.log(selectedproduct);


document.addEventListener('DOMContentLoaded',()=>{
  
document.getElementById('product-container').innerHTML=`
   <div id="hero-section">
      <div id="image-section">
        <img id="hero-image" src="${selectedproduct.imagesrc}" alt="This is an image of the product">
      </div>
      <div id="name-section">
        ${selectedproduct.Name}
      </div>
    </div>
    
    <hr>
    
    <div id="price-section">
      <div id="price-name">
        <button>
          Price
        </button>
      </div>
      <div id="price">
         ₹ ${selectedproduct.price}/-
      </div>
      <div id="offers">
        No Offers available
      </div>
    </div>
    
    <hr>
    
    <div id="Notifier">
      
    <p> Sorry , Direct Buying isn't available on our website You can Buy this product by Verified  sellers by clicking on buy  button (that will direct to the respected page )</p>
    </div>
    
    
    <hr />
    
    <div id="discription">
      <h3> Product Discription </h3>
     <p> ${selectedproduct.detaildiscription}
      </p> 
    </div>
    
    <hr />
    
    <div id="working-video">
      <h3>Working Video / Tutorial </h3>
   <iframe width="89%"  src="https://www.youtube.com/embed/bqzwWR1E5k0?si=pXYQLpcQZKXpfhWv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>
    
    <hr />
    
    
    <div id="Brand-info">
      <h3> Brand Info</h3>
     <p>Brand: Hannea</p> 
     <p>warranty: 1year</p>
     <p>suppler: ${selectedproduct.manufacture}</p>
    </div>
    `;
    
    document.getElementById('buy-button').addEventListener('click',()=>window.location.href=`${selectedproduct.directlink}`);
    
    document.getElementById('goto-cart').addEventListener('click',()=>window.location.href=`./cart.html`);
});
