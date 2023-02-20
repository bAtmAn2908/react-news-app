import React , { useEffect, useState }from 'react'
import axios from 'axios'

export const Others = () => {
  useEffect(() => {   
    getAllNews();  
  }, []) 
  const [news, setnews] = useState([])
  const getAllNews = async()=>{
   
    await axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=14").then(res=>{    
      setnews(res.data)
        console.log(res.data[1].yoast_head_json.og_image[0].url)
    })
  } 
  return (
    <div>
      <div className='mx-auto mt-5' style={{height:300, width:700}}>        
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
