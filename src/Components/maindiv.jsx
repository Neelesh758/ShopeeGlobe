import React from 'react'
import './maindiv.css'
import { useState } from 'react';
export default function Maindiv({onSearch}) {
    const [searchTerm, setSearchTerm] = useState(""); 

    const handleSearch = () => {
      onSearch(searchTerm); 
    };
  return (
    <>
    <div className="outerbody">
        <div></div>
        <div className="searchbar">
            <input type="text" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
    </>
  )
}
