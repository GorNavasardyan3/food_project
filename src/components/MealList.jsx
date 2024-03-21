import React from 'react'
import { MealItem } from './MealItem'
import { useNavigate } from 'react-router-dom'

export  function MealList({meals}) {
    const navigate = useNavigate()
  return (
    <>
    <button className=' ml-2 px-4 py-2 rounded-2xl hover:opacity-75 bg-gradient-to-r from-blue-900 to-red-500'
    onClick={() => navigate(-1)}
    >GO Back</button>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-4'>
        {
            meals.map(el => <MealItem key={el.idMeal} {...el}/>)
        }
    </div>
    </>
  )
}
