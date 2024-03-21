import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getFilteredCategory} from '../api'
import { MealList } from '../components/MealList'
import { SearchForMeals } from '../components/SearchForMeals'
import { Loading } from '../components/Lodaing/Loading'


export  function CategoryPage() {
    const [loading,setLodaing] = useState(true)
    const [filtededMeals,setFilteredMeals] = useState([])
    const [meals,setMeals] = useState([])
    const {name} = useParams()

    const search = (value) => {
        const filtered = meals.filter(el => el.strMeal.toLowerCase().includes(value.trim().toLowerCase()))
        setFilteredMeals(filtered)
    }
    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals)
            setLodaing(!loading)
        })
    },[])
  return (
    <div>
        {loading && <Loading/>}
        <SearchForMeals search={search}/>
        <MealList meals={filtededMeals.length > 0 ? filtededMeals : meals}/>
    </div>
  )
}
