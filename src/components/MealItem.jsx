import React from 'react'
import { useNavigate } from 'react-router-dom'

export  function MealItem({strMeal,idMeal,strMealThumb}) {
    const navigate = useNavigate()
  return (
    <div className=' hover:opacity-75 shadow m-2 p-2 text-center cursor-pointer'
        onClick={() => navigate('/meal/' + idMeal)}>
        <img src={strMealThumb} alt={strMeal} />
        <div>{strMeal}</div>
    </div>
  )
}
