import axios from 'axios'
import React, { useState } from 'react'
import Mealcard from './Mealcard'

export default function Mainpage() {
   const [data,setData]=useState()
   const [search,setSearch]=useState()  
   const handleinput=(e)=>{
          setSearch(e.target.value)
   }
    const Data= async()=>{
        const Recipe= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const RecipeData= await Recipe.json()
         console.log(RecipeData.meals);

         setData(RecipeData.meals)
    }
    
    console.log(data);
    
  return (
    <>
    
        <div className='container'>
            <div className='searchBar'>
               <input type='text' placeholder='Enter Dish' onChange={handleinput} />
               <button onClick={Data}>Search</button>
            </div>
        </div>
        <div>
          <Mealcard details={data} />
        </div>
        
    </>
  )
}
