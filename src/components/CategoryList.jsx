import React from 'react'
import { CategoryItem } from './CategoryItem'

export  function CategoryList({categories}) {
  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-4'>
        {
            categories.map(el => <CategoryItem key={el.idCategory} {...el}/>)
        }
    </div>
  )
}
