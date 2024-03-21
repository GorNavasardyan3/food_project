import React from 'react'

export  function Modal({modalActive,setModalActive,text}) {
  return (
    <div className={modalActive ? 'modal active':'modal'} onClick={() => setModalActive(!modalActive)}>
        <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                {text}
        </div>
    </div>
  )
}
