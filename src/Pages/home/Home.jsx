import React from 'react'
import "../home/home.css"
import Navbar from "../../component/navbar/Navbar"
import Filters from '../../component/fillters/Filters'
import Cards from '../../component/cards/Cards'

export default function Home() {
  return (
    <div>
        <Navbar />  
        <Filters />
        <Cards />
    </div>
  )
}
