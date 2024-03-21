import React from 'react'

export  function SearchForMeals({search}) {
  return (
    <div className=' text-center'>
         <input className=' outline-none p-2 text-red-500 border-b-2 border-red-500 w-2/4 text-xl italic' 
        type="text" placeholder='Search Meals !'
         onChange={(e) => search(e.target.value)}
         />
    </div>
  )
}
