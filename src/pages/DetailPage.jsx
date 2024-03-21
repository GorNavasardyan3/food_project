import React, { useEffect, useState } from 'react'
import {getMealByid} from '../api'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../components/Lodaing/Loading'
export  function DetailPage() {
    const navigate = useNavigate()
    const [loading,setLodaing] = useState(true)
    const {id} = useParams()
    const [meal,setMeal] = useState({})
    useEffect(() => {
        getMealByid(id).then(data => {
            setMeal(data.meals[0])
            setLodaing(!loading)
        })
    },[])

  return (
    <div className=' m-2'>
    {loading && <Loading/>}
    <button className=' px-4 py-2 rounded-2xl hover:opacity-75  bg-gradient-to-r from-blue-900 to-red-500'
    onClick={() => navigate(-1)}
    >GO Back</button>
    <div className='mt-2'>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <div>{meal.strMeal}</div>
        <div>{meal.strTags}</div>
    </div> 
    </div>
    
  )
}
