
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

const ReportedItems = () => {

  const [deletingItem, setDeletingItem] = useState(null);

  const closeModal = () => {
    setDeletingItem(null);
  };


//   Loading reported items from database
  const { data: reportedItems, refetch } = useQuery({
    queryKey: ["products/reported"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products/reported", {
          //   headers: {
          //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  //   Deleting a reported product
  const handleDeleteProduct = (product) => {
    const id = product._id;
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Product ${product?.title} deleted successfully`);
          refetch();
        }
      });
  };

  console.log(reportedItems);

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl md:text-4xl my-8">
        All Reported Items here
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Photo</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems?.map((reported, i) => (
              <tr key={reported._id}>
                <th>{i + 1}</th>
                <td className="text-lg font-bold">{reported?.title}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-xl">
                      <img src={reported?.image} alt="product" />
                    </div>
                  </div>
                </td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingItem(reported)}
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
      {deletingItem && (
        <ConfirmationModal
          title={`Ary You Sure You Want To Delete This Product  ??`}
          message={`Once you delete a product  it can not be undone`}
          successAction={handleDeleteProduct}
          modalData={deletingItem}
          closeModal={closeModal}
          successButtonName="Delete"
        />
      )}
    </div>
  );
};

export default ReportedItems;
