import React, { useEffect, useState } from 'react';

const ReportedItems = () => {

const [reportedItems , setReportedItems] = useState([])

useEffect( () => {
    fetch('http://localhost:5000/products/reported')
    .then(res => res.json())
    .then(data => setReportedItems(data))
}, [])

console.log(reportedItems);

    return (
        <div>
            <h2 className='text-center font-semibold text-2xl md:text-4xl my-8'>All Reported Items here</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">

    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>

    {
        reportedItems.map((reported, i) =>   <tr key={reported._id}>
            <th>{i + 1}</th>
            <td>{reported?.title}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
    }

  

   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedItems;