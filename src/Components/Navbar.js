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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
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
        <li class="nav-item px-2 fs-6">
          <Link class="nav-link active" aria-current="page" to='/others'>OTHERS </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
