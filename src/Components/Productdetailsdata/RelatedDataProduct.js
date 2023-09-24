import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import emi from "../../Images/emi.svg"
const RelatedDataProduct = ({place,rate,price,desc , title}) => {
    return (
        <div>
            <div className='py-2 relatedData' style={{ marginRight:"25px" }}>
                <div>
                    {
                        price >= 100 ? ( <p className='moreSales'>الاكثر مبيعاا</p>):( <p className='moreSales'>الاقل /* مبيعاا</p>)
                    }
                    <p>{title}</p>
                    <p style={{ color: "rgb(64, 69, 83)", fontSize: "1.6rem", fontWeight: "600" }}>{place}</p>
                    <p>{desc}</p>
                    <div className='rate d-flex justify-content-center align-baseline specialRate' style={{background: "rgb(56, 174, 4)", color: "white" }}>
                        {rate}  <FontAwesomeIcon icon={faStar} style={{ width: "10px", marginRight: "5px" }} />
                    </div>
                    <div className='mt-4 d-flex justify-content-between align-baseline px-2'>
                        <div><p>الان : <span style={{fontWeight:"900"}}>{price} جنيه</span> (يشمل الضريبه والقيمه المضافه)</p></div>
                        <div className='type'><p>اكسبرس</p></div>
                    </div>
                    <div className='d-flex justify-content-center align-baseline mt-2 py-3' style={{ borderRadius:"4px", background: "rgb(252, 251, 245)"}}>
                        <div><img src={emi} alt="images"/></div>
                        <div><p>دفعات شهرية تبدأ من جنيه 723. <a href='*'>عرض المزيد للتفاصيل</a></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedDataProduct
