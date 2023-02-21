import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
 import './Home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const setting = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
     <div>
      <div>
                <Slider {...setting}>
                    {news.map((value) => (
                        <div className='card'>
                            <img src={value.yoast_head_json.og_image[0].url} key={value.id} alt="..." className="image2"></img>
                            <h5 className="textHome1" dangerouslySetInnerHTML={{__html: value.title.rendered}}></h5>
                            <p className="textHome2" dangerouslySetInnerHTML={{__html: value.excerpt.rendered}}></p>
                        </div>
                    ))}
                </Slider>
            </div>


        {/* <div className='mx-auto ' style={{width:700}}>        
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
       <br>
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
</div>  */}

    </div>
  )
}
