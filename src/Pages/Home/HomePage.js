import React from 'react'
import Slider from '../../Components/HomeComponents/SliderComponent'
import CollectionHome from '../../Components/HomeComponents/collectionHome'
import ContainerProducts from '../../Components/HomeComponents/ContainerProducts'
import SpecialOffer from '../../utility/SpecialOffer'
import SubCategoryProducts from '../../Components/HomeComponents/SubCategoryProducts'
import GamalGona from '../../Components/HomeComponents/GamalGona'
import OffersHomePage from '../../Components/HomeComponents/offersHomePage'
import OfferDolap from '../../Components/HomeComponents/OfferDolap'
const HomePage = () => {
    return (
        <div>
            <Slider />
            <CollectionHome/>
            <ContainerProducts/>
            <SpecialOffer/>
            <SubCategoryProducts/>
            <GamalGona/>
            <OffersHomePage/>
            <OfferDolap/>
        </div>
    )
}

export default HomePage
