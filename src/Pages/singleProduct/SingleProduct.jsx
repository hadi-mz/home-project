// import React from 'react'
// import "./singleProduct.css"

// export function loader(){
//   return 0
// }
// export default function SIngleProduct() {
//   return (
//     <div>SIngleProdukict</div>
//   )
// }


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './singleProduct.css';

// export function loader() {
//   return 0;
// }

// export default function SingleProduct() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Single Product</h1>
//       <p>Product ID: {id}</p>
//     </div>
//   );
// }




import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export function loader(){
  return 0
}
export default function SingleProduct() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Not Find</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Product ID: {id}</p>
      {/* Display other product details */}
    </div>
  );
}