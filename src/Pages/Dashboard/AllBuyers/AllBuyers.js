import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const AllBuyers = () => {
  const [deletingBuyer, setDeletingBuyer] = useState(null);

  const closeModal = () => {
    setDeletingBuyer(null);
  };

  const {
    data: allBuyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://resale-zone-server.vercel.app/users/buyers`,
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

  // Delete a product from database
  const handleDeleteBuyer = (buyer) => {
    const id = buyer._id;
    fetch(`https://resale-zone-server.vercel.app/users/buyer/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Buyer ${buyer?.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl md:text-4xl my-8">
        All Buyers
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBuyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingBuyer(buyer)}
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

      {deletingBuyer && (
        <ConfirmationModal
          title={`Ary You Sure You Want To Delete This Buyer ??`}
          message={`Once you delete a buyer  it can not be undone`}
          successAction={handleDeleteBuyer}
          modalData={deletingBuyer}
          closeModal={closeModal}
          successButtonName="Delete"
        />
      )}
    </div>
  );
};

export default AllBuyers;
