import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";
import swal from "sweetalert";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const url = `https://resale-zone-server.vercel.app/myProducts?email=${user?.email}`;

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // Advertise a product
  const handleAdvertise = (id) => {
    fetch(`https://resale-zone-server.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          console.log("clicked");
          swal(
            "Congratulations",
            "Product Added to Advertise Section",
            "success"
          );
          refetch();
        }
      });
  };

  // Delete a product from database
  const handleDeleteProduct = (product) => {
    const id = product._id;
    fetch(`https://resale-zone-server.vercel.app/products/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl md:text-4xl text-center font-semibold text-gray-800 my-10">
        My All Products
      </h3>

      {
        myProducts.length > 0 ? <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Photo</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <h3 className="text-lg font-semibold">{product?.title}</h3>
                </td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={product?.image} alt="product" />
                    </div>
                  </div>
                </td>
                <td>
                  <p className="badge badge-primary">{product?.status}</p>
                </td>
                <td>
                  {product?.isAdvertised ? (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-sm btn-success hover:btn-info"
                    >
                      Already Advertised
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-sm btn-info hover:btn-success"
                    >
                      Advertise
                    </button>
                  )}
                </td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingProduct(product)}
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
: 
<p className="text-center text-2xl font-semibold text-blue-500">You Have Not Added Any Product Yet</p>
      }

      {deletingProduct && (
        <ConfirmationModal
          title={`Ary You Sure You Want To Delete This Product  ??`}
          message={`Once you delete a product  it can not be undone`}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          closeModal={closeModal}
          successButtonName="Delete"
        />
      )}
    </div>
  );
};

export default MyProducts;
