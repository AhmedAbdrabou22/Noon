import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import emi from "../../Images/emi.svg"
import value from "../../Images/valu-logo-v4.svg"
import noon from "../../Images/noon.avif"
import { useParams } from 'react-router-dom'
const RelatedDataProduct = ({ place, rate, price, desc, title }) => {
    const d1 = {
        border:"1px solid #40b8b3",
        borderRadius:"10px"
    }
    const params = useParams();
    return (
        <div>
            <div className='relatedData' style={{ marginRight: "25px" }}>
                <div>
                    {
                        price >= 100 ? (<p className='moreSales'>الاكثر مبيعاا</p>) : (<p className='moreSales'>الاقل  مبيعاا</p>)
                    }
                    <p>{title}</p>
                    <p style={{ color: "rgb(64, 69, 83)", fontSize: "1.6rem", fontWeight: "600" }}>{place}</p>
                    <p>{desc}</p>
                    <div className='rate d-flex justify-content-center align-baseline specialRate' style={{ background: "rgb(56, 174, 4)", color: "white" }}>
                        {rate}  <FontAwesomeIcon icon={faStar} style={{ width: "10px", marginRight: "5px" }} />
                    </div>
                    <div className='mt-4 d-flex justify-content-between align-baseline px-2'>
                        <div><p>الان : <span style={{ fontWeight: "900" }}>{price} جنيه</span> (يشمل الضريبه والقيمه المضافه)</p></div>
                        <div className='type'><p>اكسبرس</p></div>
                    </div>
                    <div className='d-flex justify-content-center align-baseline mt-2 py-3' style={{ borderRadius: "4px", background: "rgb(252, 251, 245)" }}>
                        <div><img src={emi} alt="images" /></div>
                        <div><p>دفعات شهرية تبدأ من جنيه 723. <a href={`${params.id}`}>عرض المزيد للتفاصيل</a></p></div>
                    </div>
                    <div className='mt-5 py-3 px-2 d-flex justify-content-center align-items-center' style={d1}>
                        <div className='w-25'> <img src={value} alt="value" className='w-75' /></div>
                        <div><span className='mx-2'>ادفع على 3 دفعات بدون فوائد بقيمة ٨٬٦٦٦٫٣٣ جنيه</span></div>
                    </div>
                    <div className='mt-4' style={{cursor:"poin"}}>
                        <img src={noon} alt="data" className='w-100'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedDataProduct
