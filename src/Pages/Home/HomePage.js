import React from 'react'
import Slider from '../../Components/HomeComponents/SliderComponent'
import CollectionHome from '../../Components/HomeComponents/collectionHome'
import ContainerProducts from '../../Components/HomeComponents/ContainerProducts'
import SpecialOffer from '../../utility/SpecialOffer'
const HomePage = () => {
    return (
        <div>
            <Slider />
            <CollectionHome/>
            <ContainerProducts/>
            <SpecialOffer/>
        </div>
    )
}

export default HomePage
