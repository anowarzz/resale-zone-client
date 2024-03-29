import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../../Shared/Loading/Loading";
import swal from "sweetalert";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AllSellers = () => {

  const {loading} = useContext(AuthContext)
  const [deletingSeller, setDeletingSeller] = useState(null);

  const closeModal = () => {
    setDeletingSeller(null);
  };

  const {
    data: allSellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://resale-zone-server.vercel.app/users/sellers`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  // Function to verify a seller
  const handleVerifySeller = (id) => {
    fetch(`https://resale-zone-server.vercel.app/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Congratulations", "This Seller Is Now Verified", "success");

          refetch();
        }
      });
  };

  // Delete a Seller from database
  const handleDeleteSeller = (seller) => {
    const id = seller._id;
    fetch(`https://resale-zone-server.vercel.app/users/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller?.name} deleted successfully`);
          refetch();
        }
      });
  };
  console.log(allSellers);
  

  if (loading || isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl md:text-4xl my-8">
        All Sellers
      </h2>
      
      {
         loading && <Loading />
      }
      {
         isLoading && <Loading />
      }

      
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
          {allSellers?.map((seller, i) => (
            <tr key={seller?._id}>
              <th>{i + 1}</th>
              <td>{seller?.name}</td>
              <td>{seller?.email}</td>
              <td>
                {seller?.isSellerVerified ? (
                  <button className="btn bg-gray-800 hover:bg-gray-400 btn-sm">
                    Verified{" "}
                    <span className="pl-1">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => handleVerifySeller(seller._id)}
                    className="btn btn-success hover:btn-info btn-sm"
                  >
                    Verify Seller
                    <span className="pl-1">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>{" "}
                  </button>
                )}
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
