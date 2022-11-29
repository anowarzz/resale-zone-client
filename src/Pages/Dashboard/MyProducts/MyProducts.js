import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    
    const  {user} = useContext(AuthContext)

    const url = `http://localhost:5000/myProducts?email=${user?.email}`;

    const { data: myProducts = [], isLoading } = useQuery({
      queryKey: ['myProducts', user?.email],
      queryFn: async () => {
        const res = await fetch(url, {
            //   authorization : `Bearer ${localStorage.getItem('accessToken')}`
            },
        );
        const data = await res.json();
        return data;
      },
    });

if(isLoading){
    <Loading />
}

    return (
        <div>
            <h3 className='text-2xl md:text-4xl text-center font-semibold text-gray-800 my-10'>My All Products Here {myProducts.length}</h3>


            <div className="overflow-x-auto">
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
   
 {
    myProducts.map((product, i)=> <tr key={product._id}>
          <th>{i+1}</th>
          <td>{product?.title}</td>
          <td>
          <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={product?.image} alt="doctor" />
                    </div>
                  </div>
          </td>
          <td>
            <p className='badge badge-primary'>Status</p>
          </td>
          <td>
            <button className='btn btn-sm btn-info hover:btn-success'>Advertise</button>
          </td>
          <td>
            <button className='btn btn-error btn-sm hover:bg-Red hover:border border-transparent'>Delete</button>
          </td>
        </tr>)
 }

    </tbody>
  </table>
</div>
      </div>

    
    );
};

export default MyProducts;