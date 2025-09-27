import React, { useContext } from 'react'
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import { FavContext } from './Addtofav';

export default function Mealcard({ details }) {
  // console.log(details);
  const {addToFav}=useContext(FavContext)

  return (
    <div className='meals'>
      {!details? <HomePage />: 
        details.map((curItem, index) => (
          <div key={index} className='mealImg'>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            <Link to={`/${curItem.idMeal}`}><button>View Recipe</button></Link> <br/>
            <button onClick={()=>addToFav(curItem)} >Add To Fav</button>
          </div>
        ))
      }
    </div>
  );
}
