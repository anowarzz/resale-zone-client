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
const productPrice = bookingProduct?.price;
const buyerName =form.name.value;
const buyerEmail =form.email.value;
const buyerPhone = form.phone.value;
const location = form.location.value;
const sellerName = bookingProduct?.sellerName; 


const bookedProduct = {
    productName,
    productPrice,
    buyerName,
    buyerEmail,
    buyerPhone,
    location,
    sellerName,
    bookingDate:  format(new Date(), 'PP')


}



fetch("http://localhost:5000/bookedProducts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
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
<<<<<<< HEAD
              className="input font-semibold input-bordered w-full bg-gray-200"
=======
              className="input input-bordered w-full bg-gray-200"
>>>>>>> 2e92c395e0ba71d74cc444550845aebec1ee8df5
            />

            <input
              defaultValue={user?.email}
              disabled
              type="email"
              name="email"
              placeholder="Email Address"
<<<<<<< HEAD
              className="font-semibold bg-gray-200 input input-bordered w-full"
=======
              className="bg-gray-200 input input-bordered w-full"
>>>>>>> 2e92c395e0ba71d74cc444550845aebec1ee8df5
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
<<<<<<< HEAD
              className="bg-gray-200 input input-bordered w-full font-semibold"
=======
              className="bg-gray-200 input input-bordered w-full"
>>>>>>> 2e92c395e0ba71d74cc444550845aebec1ee8df5
            />
            <input
         
              type="text"
              name="location"
              placeholder="Location"
<<<<<<< HEAD
              className="bg-gray-200 input input-bordered w-full font-semibold"
=======
              className="bg-gray-200 input input-bordered w-full"
>>>>>>> 2e92c395e0ba71d74cc444550845aebec1ee8df5
            />

         

            <br />
            <input disabled={booked} 
<<<<<<< HEAD
              className="w-full btn bnt-accent hover:btn-info"
=======
              className="w-full btn bnt-accent"
>>>>>>> 2e92c395e0ba71d74cc444550845aebec1ee8df5
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