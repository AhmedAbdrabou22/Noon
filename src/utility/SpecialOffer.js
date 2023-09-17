import React from 'react'
import newTv from '../Images/newTv.avif'
const SpecialOffer = () => {
    return (
        <div className='containerCustomized'>
            <div className='mt-5 bestOffer' style={{cursor:"pointer"}}>
                <img src={newTv} alt="Tv"/>
            </div>
        </div>
    )
}

export default SpecialOffer
