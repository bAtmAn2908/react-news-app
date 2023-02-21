import React , { useEffect, useState }from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Beauty = () => {
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
    <div className='col-sm-12 col-md-12 col-lg-12'>
      <div className='card mx-auto' style={{width:700}}>        
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
        </div> 

    </div>
  )
}