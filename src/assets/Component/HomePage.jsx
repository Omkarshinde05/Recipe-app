import React, { useState, useEffect, useContext } from 'react'
import { Link} from 'react-router-dom'
import { FavContext } from './Addtofav';

export default function HomePage() {
  const [storeddata, setStoreddata] = useState([]);
     const {addToFav}= useContext(FavContext)
  

  const Store = async () => {
    const recipe = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    const recipedata = await recipe.json()
    setStoreddata(recipedata.meals) // meals is an array
  }

  // fetch once when component mounts
  useEffect(() => {
    Store()
  }, []);
   
//  console.log(storeddata.idMeal);
 
  return (
    <div>
      <div className='meals'>
        {storeddata && storeddata.map((curItem, index) => (
          <div key={index} className='mealImg'>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            <Link to={`/${curItem.idMeal}`}><button>View Recipe</button></Link> <br/>
             <button onClick={() =>addToFav(curItem)}>Add To Fav</button>
            
          </div>
        ))}
      </div>
    </div>
  )
}
