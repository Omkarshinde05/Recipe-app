import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Mealinfo() {
  const { mealid } = useParams()
  const [mealData, setMealData] = useState(null)

  useEffect(() => {
    const getinfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        )
        const jsondata = await response.json()
        setMealData(jsondata.meals[0]) // store first meal object
        console.log(jsondata.meals[0])
      } catch (error) {
        console.error("Error fetching meal data:", error)
      }
    }

    if (mealid) {
      getinfo()
    }
  }, [mealid]) // runs whenever mealid changes

  return (
    <div>
      {mealData ? (
        <div className='mealInfo'>
          <img src={mealData.strMealThumb} alt={mealData.strMeal} width="300" />
          <div className='info'>
          <h1>Recipe Details</h1>
          <button>{mealData.strMeal}</button>
          <h3>Intruction's</h3>
          <p>{mealData.strInstructions}</p>
          </div>
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  )
}
