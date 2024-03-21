import React, { useEffect, useState } from 'react'
import {getAllCategories} from '../api'
import { CategoryList } from '../components/CategoryList'
import {SearchForCategories} from '../components/SearchForCategories'
import { Loading } from '../components/Lodaing/Loading'

export  function HomePage() {
    const [loading,setLodaing] = useState(true)
    const [filteredCategories,setFilteredCategories] = useState([])
    const[categories,setCategories] = useState([])

    const search = (value) => {
        const filtered = categories.filter(el => el.strCategory.toLowerCase().includes(value.trim().toLowerCase())
        || el.strCategoryDescription.toLowerCase().includes(value.trim().toLowerCase()))
        setFilteredCategories(filtered)
    }
    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data.categories)
            setLodaing(!loading)
        })
    },[])


    return (
    <div>
        {loading && <Loading/>}
        <SearchForCategories search={search}/>
        <CategoryList categories={filteredCategories.length > 0 ? filteredCategories : categories}/>
    </div>
  )
}
