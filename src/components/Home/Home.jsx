import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react'

export default function Home() {

  
   const[trendMovie,settrendMovie]=useState(null)
  async function getMovie() {
    
    const {data} =  await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US',{
  
      headers:{Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ1NGZkYzczZjUwOTQ3ZGUzNWNlODkxODIzNDcyZSIsInN1YiI6IjY1MGE4NjhkYWVkZTU5MDBhYmQ1MzczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6kLPHlOMQLfySaIvoXaIiAl1m_rymDXyTqX7cWGHSYU',
      accept:'application/json' }
      });
      settrendMovie(data.results)
  
      console.log(data.results);
     }
  
   useEffect(function () {
    getMovie()
    
   
  
  
   },[])
    return<> 
    {trendMovie===null? <div className="bg-danger vh-100 text-center">
      <i className="fa-solid fa-spin fa-5x fa-spinner text-white"></i>
    </div>: <>
   
    
    <div className="bg-black">

   
    <div className="container">
    <h1 className="text-center text-danger py-3">MovieTrendy</h1>
<div className="row">


{trendMovie.map((movie,index)=><div key={index}  className="col-md-3">

<div>

<img  className="w-100"src={'https://image.tmdb.org/t/p/original'+ movie.poster_path} alt={movie.title} />
<h2 className="text-center fs-4">{movie.title}</h2>
 
 
</div>


</div>)
}




</div>

    </div>
    </div>
   
    </>}
    
       </>
    
  }





 

