import React from 'react'
import Header from '../Components/Header'
import { CarContainer } from '../Components/CarContainer'
import { headerNames, wholeNumbers } from '../Utils/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../Store/store'

const Home = () => {

    return (
        <div>
            <Header menus={headerNames} />
            <CarContainer />
        </div>
    )
}

export default Home