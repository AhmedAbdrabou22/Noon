import React from 'react'
import Slider from '../../Components/HomeComponents/SliderComponent'
import CollectionHome from '../../Components/HomeComponents/collectionHome'
import ContainerProducts from '../../Components/HomeComponents/ContainerProducts'
import SpecialOffer from '../../utility/SpecialOffer'
import SubCategoryProducts from '../../Components/HomeComponents/SubCategoryProducts'
const HomePage = () => {
    return (
        <div>
            <Slider />
            <CollectionHome/>
            <ContainerProducts/>
            <SpecialOffer/>
            <SubCategoryProducts/>
        </div>
    )
}

export default HomePage
