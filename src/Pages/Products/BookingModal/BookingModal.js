import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({bookingProduct, setBookingProduct}) => {

const {user} = useContext(AuthContext);

const [booked, setBooked] = useState(false)







const handleBooking = (event) => {
event.preventDefault();

const form = event.target;
const productName = bookingProduct?.title;
const productPrice = bookingProduct?.resalePrice;
const buyerName =form.name.value;
const buyerEmail =form.email.value;
const buyerPhone = form.phone.value;
const location = form.location.value;
const sellerName = bookingProduct?.sellerName;
const image = bookingProduct?.image
 

const bookedProduct = {
    productName,
    productPrice,
    buyerName,
    buyerEmail,
    buyerPhone,
    location,
    sellerName,
    image,
    bookingDate:  format(new Date(), 'PP')


}



fetch("http://localhost:5000/bookedProducts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify(bookedProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.acknowledged) {
        setBookingProduct(null);
        toast.success("Booking Confirmed");
        setBooked(true)
      }
      else{
        toast.error(data.message)
      }
    });


}




    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />

<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
 <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center">{bookingProduct?.title}</h3>
    <p className='font-semibold text-center'> Price : ${bookingProduct?.resalePrice}</p>


    <form onSubmit={handleBooking} className="flex flex-col gap-4 mt-10">
     
            <input
              defaultValue={user?.displayName}
              disabled
              type="text"
              name="name"
              placeholder="User Name"
              className="input font-semibold input-bordered w-full bg-gray-200"
            />

            <input
              defaultValue={user?.email}
              disabled
              type="email"
              name="email"
              placeholder="Email Address"
              className="font-semibold bg-gray-200 input input-bordered w-full"
            />
            <input
              type="tel"  required 
              name="phone"
              placeholder="Phone Number"
              className="bg-gray-200 input input-bordered w-full font-semibold"
            />
            <input
         
              type="text" required
              name="location"
              placeholder="Location"
              className="bg-gray-200 input input-bordered w-full font-semibold"
            />

         

            <br />
            <input disabled={booked} 
              className="w-full btn bg-gray-800 hover:btn-info"
              type="submit"
              value="Book Product"
            />
          </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;