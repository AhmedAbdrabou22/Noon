import React from 'react'
import CaursolSlider from '../../utility/CaursolSlider'
import Visita from '../../utility/Visita'
import { useParams } from 'react-router-dom'
const CategoryPage = () => {

    const params = useParams();
    console.log(params);
    return (
        <div>
            <CaursolSlider/>
            <Visita/>
        </div>
    )
}

export default CategoryPage
