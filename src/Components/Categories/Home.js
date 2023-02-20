import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import './Home.css'

export const Home = () => {


  useEffect(() => {   
    getAllNews();  
  }, []) 
  const [news, setnews] = useState([])
  const getAllNews = async()=>{
   
    await axios.get("https://timenews.co.in/wp-json/wp/v2/posts").then(res=>{    
      setnews(res.data)
        console.log(res.data[1].yoast_head_json.og_image[0].url)
    })
  } 
  return (
     <div>
      
        <div className='mx-auto ' style={{width:700}}>        
        
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   
    {
        news.map((items) => ( 
          <div class="carousel-item active">
      <img src={items.yoast_head_json.og_image[0].url} class="d-block w-100" alt=""></img>
      </div>
      ))
    }
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* //           <div class="card" >
//   <img src={items.yoast_head_json.og_image[0].url} class="card-img-top" alt="..."></img> 
//   <div class="card-body">
//     <h4 class="card-title"><b>{items.title.rendered}</b></h4>
//     <p class="card-text">{items.excerpt.rendered}</p>
//   </div>
// </div> */}
         
             
        </div> <br>
        </br>
         <div aria-label="Page navigation example  ">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <Link class="page-link"to="" tabindex="-1" aria-disabled="true">Previous</Link>
    </li>
    <li class="page-item disabled">
      <Link class="page-link"to="" tabindex="-1" aria-disabled="true">1</Link>
    </li>
   
    <li class="page-item"><Link class="page-link"to="/home2">2</Link></li>
    <li class="page-item"><Link class="page-link"to="/home3">3</Link></li>
    <li class="page-item">
      <Link class="page-link"to="/home2">Next</Link>
    </li>
  </ul>
</div> 

    </div>
  )
}
