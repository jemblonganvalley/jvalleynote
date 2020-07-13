import React from 'react'
import CircleButton from '../../button/CircleButton'

const PageQuotes = () => {
  return (
    <div className='container-fluid pageQuotes'>
      
        <CircleButton 
            bgColor='black' 
            icon='create' 
            color='#fff'
            iconSize='1.4rem'
            width='50px'
            height='50px'
            posRight='20px'
            posBottom='20px'
            rounded
        />

        <CircleButton 
            bgColor='#FD7272' 
            icon='save' 
            color='#fff'
            iconSize='.8rem'
            width='30px'
            height='30px'
            posRight='30px'
            posBottom='80px'
        />


        <h1 className="quotes">
            Selamat Pagi Semua..
        </h1>


    </div>
  )
}

export default PageQuotes
