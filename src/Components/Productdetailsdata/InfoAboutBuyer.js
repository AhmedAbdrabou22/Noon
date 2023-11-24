import React from 'react'
import warrent from "../../Images/warranty.svg"
import Locker from "../../Images/noon-locker.svg"
import Free from "../../Images/free_returns.svg"
import down from "../../Images/download.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const InfoAboutBuyer = (props) => {
    console.log(props.rate);
    console.log(props.reviews);
    return (
        <div>
            <div className='d-flex  align-items-center' style={{ borderBottom: "1px solid #f7f7fa", padding: "10px" }}>
                <p><img src={warrent} alt="data" /></p> <p>3 month warranty</p>
            </div>
            <div className='d-flex  align-items-center' style={{ borderBottom: "1px solid #f7f7fa", padding: "10px" }}>
                <p><img src={Locker} alt="data" /></p> <p>توصيل مجاني لمراكز الاستلام</p>
            </div>
            <div className='d-flex  align-items-center' style={{ borderBottom: "1px solid #f7f7fa", padding: "10px" }}>
                <p><img src={Free} alt="data" /></p> <p>تقدر ترجّع المنتج بسهولة في العرض ده</p>
            </div>
            <div className='d-flex  align-items-center'>
                {
                    props.user.image === null ? (
                        <div><img src={down} alt='dataDef' style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></div>
                    ) : (<div><img src={props.user.image} alt="dataimage" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></div>)
                }
                <div style={{ lineHeight: "15px" }}>
                    <p>اسم البائع : {props.user.name}</p>
                    <p>للتواصل مع البائع : {props.user.phone}</p>
                </div>
            </div>
            <div className='d-flex  align-items-center'>
                <div>تقييم البائع </div>
                {
                    props.rate >= 4 ? (
                        <div className='rate d-flex justify-content-center align-baseline specialRate mx-3' style={{ background: "rgb(56, 174, 4)", color: "white" }}>
                            {props.rate}  <FontAwesomeIcon icon={faStar} style={{ width: "10px", marginRight: "5px" }} />
                        </div>
                    ) : (
                        <div className='rate d-flex justify-content-center align-baseline specialRate mx-3' style={{ background: "rgb(255, 0, 0)", color: "white" }}>
                            {props.rate}  <FontAwesomeIcon icon={faStar} style={{ width: "10px", marginRight: "5px" }} />
                        </div>
                    )
                }
            </div>
            <hr />
            <div>
                <p>كل التعليقات الخاصه بالمنتج</p>
                {
                    props.reviews.map((comment)=>{
                        return(
                            <div key={comment.id} className='reviews mt-3'>
                                <div className=''>
                                    <img src={comment.user.image} alt="data" style={{width:"50px" , height:"50px" , borderRadius:"50%" , verticalAlign:"middle"}}/>
                                    <span className='mx-2'>{comment.user.name}</span>
                                </div>
                                <p className='mt-3'>{comment.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InfoAboutBuyer
