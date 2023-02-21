import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Button = () => {
    const params =useParams();
    const {id} = params;
   const [one,setOne] = useState({})
    useEffect(() => {
        getDatabyId()
    })
    const getDatabyId =async(data) =>{
        await axios.get("https://timenews.co.in/wp-json/wp/v2/posts/"+id,data).then(res =>{
            // console.log(res.data)
            setOne(res.data)
        }).catch(err=> {
            console.log(err)
        })
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'> <div dangerouslySetInnerHTML={{__html: one?.content?.rendered}} style={{backgroundColor:'antiquewhite'}}></div></div>
            <div className='col-2'></div>

        </div>
       

    </div>
  )
}
