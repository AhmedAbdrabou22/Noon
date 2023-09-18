import React from 'react'
import gamal from '../../Images/gamal.avif'
import gamal2 from '../../Images/gamal2.avif'
import gamal3 from '../../Images/gamal3.avif'
import gamal4 from '../../Images/gamal4.avif'
import gamal6 from '../../Images/gamal6.avif'
import gamal7 from '../../Images/gamal7.avif'
import Subtitle from '../../utility/Suptitle'
const GamalGona = () => {
    return (
        <div className='containerCustomized' style={{ background: "rgb(252, 248, 243)"}}>
            <div style={{marginTop:"80px"}}>
                <Subtitle title="مهرجان الجمال | 17-21 سبتمبر " othertitle="" />
                <div className='py-3 containerImages row mt-4'>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal} alt="gamal" /></div>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal2} alt="gamal" /></div>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal3} alt="gamal" /></div>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal4} alt="gamal" /></div>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal6} alt="gamal" /></div>
                    <div className='col-lg-2  col-sm-4 text-center'><img src={gamal7} alt="gamal" /></div>
                </div>
            </div>
        </div>
    )
}

export default GamalGona
