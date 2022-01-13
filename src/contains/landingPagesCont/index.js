import React from 'react'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'
import Fixtures from '../../components/Fixtures'
import Results from '../../components/Results'


function index() {
    return (
        <div className='aplication'>
           <Header/>
           <Carousel/>
           
           <Fixtures/>
           
           
           
        </div>
    )
}

export default index
