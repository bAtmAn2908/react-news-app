import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import './Home.css'

export const Business3 = () => {


  useEffect(() => {   
    getAllNews();  
  }, []) 
  const [news, setnews] = useState([])
  const getAllNews = async()=>{
   
    await axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=7&page=3").then(res=>{    
      setnews(res.data)
        console.log(res.data[1].yoast_head_json.og_image[0].url)
    })
  } 
  return (
     <div className='col-sm-12 col-md-12 col-lg-12'> 
      
        <div className='mx-auto ' style={{width:700}}>        
       {
        news.map((items) => (  
          <div class="card mt-3" style={{borderRadius:20,backgroundColor:'ivory'}}>
          <img src={items.yoast_head_json.og_image[0].url} class="card-img-top" alt="..." style={{maxHeight:400,borderRadius:20}}></img>  
          <div class="card-body">
          <h4 class="card-title" dangerouslySetInnerHTML={{__html: items.title.rendered}}></h4>
            <p class="card-text" dangerouslySetInnerHTML={{__html: items.excerpt.rendered}}></p>
            <Link to={`/button/${items.id}`} ><button type="button" class="btn" style={{backgroundColor:'midnightblue',color:'white',borderRadius:200}}>Read more...</button></Link>
          </div>
        </div>
         
        ))
       }      
        </div> <br>
        </br>
        <div aria-label="Page navigation example  ">
  <ul class="pagination justify-content-center">
    <li class="page-item ">
      <Link class="page-link"to="/bus2" tabindex="-1" aria-disabled="true">Previous</Link>
    </li>
    <li class="page-item"><Link class="page-link"to="/bus">1</Link></li>
    <li class="page-item"><Link class="page-link"to="/bus2">2</Link></li>
    <li class="page-item disabled">
      <Link class="page-link"to="" tabindex="-1" aria-disabled="true">3 </Link>
    </li>
    <li class="page-item disabled">
      <Link class="page-link"to="" tabindex="-1" aria-disabled="true">Next</Link>
    </li>
  </ul>
</div>

    </div>
  )
}
