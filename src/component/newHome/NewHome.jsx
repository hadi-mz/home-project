import React, { useState, useRef } from 'react';
import "./newhome.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
export default function NewHome() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
  
    const [selectedImages, setSelectedImages] = useState([]);
    const mtRef = useRef(null);
    const locRef = useRef(null);
    const bedroomsRef = useRef(null);
    const bathroomsRef = useRef(null);
    const priceRef = useRef(null);
   
    const handleImageChange = (event, index) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImages([...selectedImages, imageUrl]);
    };
  
    const handleImageRemove = (index) => {
      const newSelectedImages = [...selectedImages];
      newSelectedImages.splice(index, 1);
      setSelectedImages(newSelectedImages);
    };
  
    const handleAddItem = () => {
      const mtValue = mtRef.current.value;
      const locValue = locRef.current.value;
      const bedroomsValue = bedroomsRef.current.value;
      const bathroomsValue = bathroomsRef.current.value;
      const priceValue = priceRef.current.value;
  
      const newItem = {
        featureImage: selectedImages[0],
        images: selectedImages.slice(1),
         title: "apartment",
        price: parseInt(priceValue, 10),
        Condition: "Sale",
        score: 0,
        ratings: 0,
        brief: "",
        MT: parseInt(mtValue, 10),
        YearOfConstruction: 0,
        Bathrooms: parseInt(bathroomsValue, 10),
        Bedrooms: parseInt(bedroomsValue, 10),
        Location: locValue,
        Comments: []
      };
  
      dispatch({ type: "ADD_ITEM", payload: newItem });
  
   
      mtRef.current.value = '';
      locRef.current.value = '';
      bedroomsRef.current.value = '';
      bathroomsRef.current.value = '';
      priceRef.current.value = '';
      navigate("/home");
    };
  
  
    return (
        <div className='items-center justify-center'>
            <div className="w-full h-full   justify-center flex">
                <div className="flex justify-around h-40 w-1/2 border">
                    {selectedImages.map((imageUrl, index) => (
                        <div key={index} className='w-32 h-32 border'>
                            <span className="close-btn" onClick={() => handleImageRemove(index)}>
                                &times;
                            </span>
                            <img src={imageUrl} alt="Selected" className="h-full w-full object-cover" />
                        </div>
                    ))}
                    {selectedImages.length < 4 && (
                        <div className='w-32 h-32 border cursor-pointer'>
                            <input
                                type="file"
                                placeholder=''
                                className='h-full w-full border'
                                onChange={(event) => handleImageChange(event, selectedImages.length)}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className='flex w-full h-24   mt-5 items-center justify-center'>
                <div className='w-1/3 h-full flex justify-around'>
                    <select name="" id="" className='w-1/3 h-8'>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                    </select>
                    <select name="" id="" className='w-1/3 h-8'>
                        <option value="Sale">Sale</option>
                        <option value="Rent">Rent</option>
                        <option value="mortgage"> mortgage</option>
                    </select>
                </div>
            </div>

            <div className="flex w-full h-24   mt-5 items-center justify-center">
                <div className="w-1/2 h-full flex justify-around  items-center">
                    <div className='w-full flex gap-2 items-center'>
                        <label htmlFor="mt">MT:</label>
                        <input ref={mtRef} type="number" name="mt" id="mt" className='border h-8 w-1/2 text-sm text-black font-serif' />
                    </div>
                    <div className='w-full flex gap-2 items-center'>
                        <label htmlFor="LOC">LOCATION:</label>
                        <input ref={locRef} type="text" name="LOC" id="LOC" className='border h-8 w-1/2 text-sm text-black font-serif' />
                    </div>
                </div>
            </div>

            <div className="flex w-full h-24  mt-5 items-center justify-center">
                <div className="w-1/3 h-full flex justify-around  items-center">
                    <select ref={bedroomsRef} name="bedrooms" id="" className='w-1/3 h-8'>
                        <option value="">bedrooms</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">6</option>
                    </select>
                    <select ref={bathroomsRef} name="bathrooms" id="" className='w-1/3 h-8'>
                        <option value="">bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full h-24  mt-5 items-center justify-center">
                <input ref={priceRef} type="number" className='w-1/4 h-8 border text-sm font-sans' placeholder='Price:' />
            </div>
            <div className="flex w-full h-24  items-center justify-center">
                <button className='bg-slate-900 text-white rounded p-4' onClick={handleAddItem}>
                    Add Item
                </button>
            </div>
        </div>
    );
}