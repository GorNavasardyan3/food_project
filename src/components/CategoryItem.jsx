import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../Modal'

export function CategoryItem({strCategoryThumb,strCategory,strCategoryDescription}) {
    const [modalActive,setModalActive] = useState(false)
    const navigate = useNavigate()
    return (
    <div className=' m-2 p-2 shadow'>
        <img src={strCategoryThumb} alt={strCategory} className=' w-full' />
        <div className=' text-red-500 text-xl'>{strCategory}</div>
        <div className=' inline'>{strCategoryDescription.slice(0,50) + '...'}</div>
        <button className=' text-red-500' onClick={() => setModalActive(!modalActive)} >Read More</button>
        <button className=' w-full hover:opacity-75 bg-gradient-to-r from-red-800 to-red-400 px-4 py-2'
        onClick={() => navigate('/category/' + strCategory)}
        >Details</button>
        <Modal setModalActive={setModalActive} modalActive={modalActive} text={strCategoryDescription} />
    </div>
  )
}
