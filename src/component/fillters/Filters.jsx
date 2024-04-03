


import React, { useState } from 'react';
import "../fillters/filters.css";
import { GrLinkBottom } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { TbHomeInfinity } from "react-icons/tb";
import { TbHomeHand } from "react-icons/tb";
export default function Filters() {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
    };

    return (
        <div className="filters">
            <h4>Filter your need to get a better result</h4>
            <div className='head'>
                <div className='defu1'>
                    <p>Apartment</p>
                    <MdApartment />
                </div>
                <div className='defu1'>
                    <p>Villa</p>
                <HiMiniHomeModern />
                </div>
                <div className='defu1'>
                    <p> mortgage</p>
                    <TbHomeInfinity />
                </div>
                <div className='defu1'>
                    <p>Rent</p>
                    <TbHomeHand />
                </div>
                <GrLinkBottom className='btn-filter-boutom' onClick={handleClick} />
            </div>
            <div className={`bottom-filters ${isClicked ? 'click' : ""}`}>
                <div className="row-one-filter">
                    <input type='number' placeholder='parallel from' />
                    <input type='number' placeholder='parallel up to' />
                    <button>Applay</button>
                </div>
                <div className="row-tow-filter">
                    <input type='number' placeholder='price from' />
                    <input type='number' placeholder='Price up to' />
                    <p>ellekfkfr</p>
                 </div>
            </div>
        </div>
    );
}