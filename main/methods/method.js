import {methods,visibleMethod} from '../productspage/scripts/data.js';
const methodcontainer=document.getElementById('method');

console.log(visibleMethod);
methods.forEach((method)=>{
  if(visibleMethod==method.heading){
    methodcontainer.innerHTML=`
      
    
    <h2 class="method-heading">${method.heading}</h2>
     <div class="p1">
      <div class="p1-discription">
        <h3 class="method-subheading">${method.subheading1}</h3>
      <p class="discription">${method.subdiscript1}</p>
    </div>
    <div class="p1-image">
      <img src="${method.imagesrc}1" alt="This is an image" width="100%">
    </div>
  </div> 

    <div class="p1">
    <div class="p1-image">
      <img src="${method.imagesrc}2" alt="This is an image" width="100%">
    </div>
    <div class="p1-discription">
      <h3 class="method-subheading">${method.subheading2}</h3>
    <p class="discription">${method.subdiscript2}</p>
  </div>
</div>
     
     <div class="p1">
      <div class="p1-discription">
        <h3 class="method-subheading">${method.subheading3}</h3>
      <p class="discription">${method.subdiscript3}</p>
    </div>
    <div class="p1-image">
      <img src="${method.imagesrc}3" alt="This is an image" width="100%">
    </div>
  </div> 


  <div class="p1">
    <div class="p1-image">
      <img src="${method.imagesrc}4" alt="This is an image" width="100%">
    </div>
    <div class="p1-discription">
      <h3 class="method-subheading">${method.subheading4}</h3>
    <p class="discription">${method.subdiscript4}</p>
  </div>
</div>

<div class="p1">
  <div class="p1-discription">
    <h3 class="method-subheading">${method.subheading5}</h3>
  <p class="discription">${method.subdiscript5}</p>
</div>
<div class="p1-image">
  <img src="${method.imagesrc}5" alt="This is an image" width="100%">
</div>

    `;
  }
})