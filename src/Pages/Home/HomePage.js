import React from 'react'
import Slider from '../../Components/HomeComponents/SliderComponent'
import CollectionHome from '../../Components/HomeComponents/collectionHome'
import ContainerProducts from '../../Components/HomeComponents/ContainerProducts'
const HomePage = () => {
    return (
        <div>
            <Slider />
            <CollectionHome/>
            <ContainerProducts/>
        </div>
    )
}

export default HomePage
