import React from 'react'
import {useState } from "react";


function Checkout() {
  const [address , setAddress] = useState("");
  function handlePayment(e){
    e.preventDefault();
    if(address  == "" ){
      alert("Plese Enter values");
      return;
    }
    alert("Your Order has been placed successfully!");
    }
  
  return (
    <div className="payment mx-0">
 <div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <form onSubmit={handlePayment}>
      <h1 className='text-danger text-center mt-3'>Checkout</h1>
    
      <div className="input-group flex-nowrap mt-5">
        <h5 className="ms-3 mt-3 mb-2">Address : </h5>
        <input type="text" className="form-control mt-1 ms-0 me-5" size="20" placeholder="Address" aria-label="Username" value={address} onChange={e => setAddress(e.target.value)} aria-describedby="addon-wrapping" required/>
      </div>

      <div>
        <h4 className='mt-5 ms-3'>Choose the payment mode</h4>
        <div className='ms-3 fs-5'>
          <div className="form-check mt-3 ">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Cash on delivery
            </label>
          </div>
          <div className="form-check" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label"  for="flexRadioDefault1">
              <div data-bs-dismiss="modal">
              UPI
              </div>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Paytm
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              PhonePe
            </label>
          </div>
          <button type="submit" className='mt-5 btn btn-success'>Complete payment </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Checkout