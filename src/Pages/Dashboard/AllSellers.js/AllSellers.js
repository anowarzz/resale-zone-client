import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {

    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
      setDeletingSeller(null);
    };

 
 
 
    const [allSellers, setAllSellers] = useState([]);

    useEffect( () => {
      fetch('http://localhost:5000/users/sellers')
      .then(res => res.json())
      .then(data => setAllSellers(data))
    }, [])
    

  // Delete a Seller from database
  const handleDeleteSeller = (seller) => {
    const id = seller._id;
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller?.name} deleted successfully`);

        }
      });
    }





    return (
        <div>
              <h2 className='text-center font-semibold text-2xl md:text-4xl my-8'>All Sellers</h2>
              <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Verify</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allSellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller?.name}</td>
                  <td>{seller?.email}</td>
                  <td>
                    <button className="btn btn-success hover:btn-info btn-sm">Verify Seller <span className="pl-1"><FontAwesomeIcon icon={faCheckCircle} /></span> </button>
                  </td>
                  <td>
                    <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingSeller(seller)}
                    className="btn btn-error btn-sm hover:bg-Red hover:border border-transparent"
                  >
                    Delete
                  </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              
             
        {deletingSeller && (
        <ConfirmationModal
          title={`Ary You Sure You Want To Delete This Seller??`}
          message={`Once you delete a seller,   it can not be undone`}
          successAction={handleDeleteSeller}
          modalData={deletingSeller}
          closeModal={closeModal}
          successButtonName="Delete"
        />
      )} 
        </div>
    );
};

export default AllSellers;