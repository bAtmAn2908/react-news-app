import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import './Home.css'

export const Corona2 = () => {


  useEffect(() => {   
    getAllNews();  
  }, []) 
  const [news, setnews] = useState([])
  const getAllNews = async()=>{
   
    await axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=833&page=2").then(res=>{    
      setnews(res.data)
        console.log(res.data[1].yoast_head_json.og_image[0].url)
    })
  } 
  return (
     <div>
      
        <div className='mx-auto ' style={{width:700}}>        
       {
        news.map((items) => (  
          <div class="card" >
  <img src={items.yoast_head_json.og_image[0].url} class="card-img-top" alt="..."></img> 
  <div class="card-body">
    <h4 class="card-title"><b>{items.title.rendered}</b></h4>
    <p class="card-text">{items.excerpt.rendered}</p>
  </div>
</div>
         
        ))
       }      
        </div> <br>
        </br>
        <div aria-label="Page navigation example  ">
  <ul class="pagination justify-content-center">
    <li class="page-item ">
      <Link class="page-link"to="/corona" tabindex="-1" aria-disabled="true">Previous</Link>
    </li>
    <li class="page-item"><Link class="page-link"to="/corona">1</Link></li>
    <li class="page-item disabled">
      <Link class="page-link"to="" tabindex="-1" aria-disabled="true">2 </Link>
    </li>
    <li class="page-item"><Link class="page-link"to="/corona3">3</Link></li>
    <li class="page-item">
      <Link class="page-link"to="/corona3">Next</Link>
    </li>
  </ul>
</div>

    </div>
  )
}
