import React , { useEffect, useState }from 'react'
import axios from 'axios'

export const Entertainment = () => {
  useEffect(() => {   
    getAllNews();  
  }, []) 
  const [news, setnews] = useState([])
  const getAllNews = async()=>{
   
    await axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=6").then(res=>{    
      setnews(res.data)
        console.log(res.data[1].yoast_head_json.og_image[0].url)
    })
  } 
  return (
    <div className='col-sm-12 col-md-12 col-lg-12'>
      <div className='card mx-auto' style={{width:700}}>        
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
        </div> 

    </div>
  )
}