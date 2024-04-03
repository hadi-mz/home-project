
    import React from 'react';
    import "../cards/cards.css";
    import { FaSquareInstagram, FaTelegram, FaLinkedin } from "react-icons/fa6";
    import { MdBedroomParent } from "react-icons/md";
    import { LiaBathSolid } from "react-icons/lia";
    import { useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';

    export default function Cards() {
      const products = useSelector((state) => state.products);
      console.log(products.Bathrooms);
      return (
        <div className='cards-continer'>
          <div className="cards">
            {products.map((product) => (
              <div className="card-wi border" key={product.id}>
                <div className="flex items-center">
                  <div className="max-w-sm w-full">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                      <Link to={`/home/singleproduct/${product.id}`}>
                        <div className="bg-cover bg-center h-56 p-4">
                          <div className="flex justify-end">
                            <img src={product.featureImage} className='h-48 object-cover' alt="" />
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="uppercase tracking-wide text-sm font-semibold text-gray-700">{product.title}</p>
                          <p className="text-1xl mt-2 mb-2 text-gray-900"><span className='text-green-400'>$ </span>{product.price}</p>
                          <p className="text-gray-700 text-sm">{product.Location}</p>
                          <div className='flex justify-between text-center items-center '>
                          <p className='mt-1 text-sm text-orange-400'>{product.Condition}</p>
                          <p className='text-xs'>{product.MT } MT</p>
                          </div>
                        </div>
                        <div className="flex p-4 border-t border-gray-300 text-gray-700">
                          <div className="flex-1 inline-flex items-center">
                            <MdBedroomParent className="h-6 w-6 fill-current mr-3 bg-none text-orange-400" size={"30px"} />
                            <p className='text-sm'><span className="text-gray-900">{product?.Bedrooms}</span> Bedrooms</p>
                          </div>
                          <div className="flex-1 inline-flex items-center">
                            <LiaBathSolid className="h-6 w-6 fill-current mr-3 text-orange-400" size={"30px"} />
                            <p className='text-sm'><span className="text-gray-900 ">{product?.Bathrooms}</span> Bathrooms</p>
                          </div>
                        </div>
                        <div className="px-2 pt-1 pb-2 border-t border-gray-300 bg-gray-100">
                          <div className="text-xs uppercase text-gray-600 tracking-wide ">Sheare </div>
                          <div className="flex justify-start mt-2 ">
                            <FaSquareInstagram size={"16px"} className='text-orange-400 cursor-pointer ' />
                            <FaTelegram size={"16px"} className='ml-3 text-orange-400' />
                            <FaLinkedin size={"16px"} className='ml-3 text-orange-400' />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }















