import React from 'react';
function Card(Props){
return(
<div>
<div className="col mb-5">
  <div className="card h-100">
  <div className="badge bg-dark text-white position-absolute"style={{top:"0.5rem",right:"0.5rem"}} >{Props.cardData.name}</div>
      <img className="card-img-top" src="https://dummyimage.com/100x100/dee2e6/6c757d.jpg" alt="..."/>
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{Props.cardData.title}</h5> 
              <span className={Props.cardData.staricon}></span>
              <span className={Props.cardData.lineprice}>{Props.cardData.price}</span>
              {Props.cardData.amount}
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
               <button className="btn btn-outline-dark mt-auto">
                  Add to cart
               </button>
               
          </div>
      </div>
  </div>
</div>
</div>





)





}
export default Card;
