import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Navbar = () => {

   

    // const getAllCategories = async()=>{
    //     await axios.get("https://timenews.co.in/wp-json/wp/v2/categories").then(res=>{
    //         console.log(res.data)
    //     })
    // }
  return (
    
    <div className='mb-5'>
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark fixed-top ">
  <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto ">
        <li class="nav-item px-2 px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/'>HOME</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/corona'>CORONA</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/world'>WORLD</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/gujarat'>GUJARAT</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/ahm'>AHMEDABAD</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/bus'>BUSINESS</Link>
        </li>
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/tech'>TECHNOLOGY</Link>
        </li>
        <li class="nav-item dropdown px-2 fs-6">
          <Link class="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OTHERS
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/beauty">BEAUTY</Link></li>
            <li><Link class="dropdown-item" to="/food">FOOD</Link></li>
            <li><Link class="dropdown-item" to="/enter">ENTERTAINMENT</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
