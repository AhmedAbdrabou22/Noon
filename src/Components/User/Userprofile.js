import React from 'react'
import imgProfile from "../../Images/download.png"
const Userprofile = () => {
    var user = {};
    if(localStorage.getItem("user")){
        user = JSON.parse(localStorage.getItem("user"))
    }
    return (
        <div>
            <div className='text-center mt-4'>
                <div>
                    {
                        user.image === null ? (<img src={imgProfile} alt="ImageProfile"/>):(
                            <img src={user.image} alt="ImageData"  style={{width:"180px" , height:"180px" , borderRadius:"50%"}}/>
                        )
                    }
                </div>
                <div className='mt-4'>
                    <h2><span style={{fontWeight:"800" , fontSize:"25px"}}>الاسم</span> : <span>{user.name}</span></h2>
                </div>
                <div className='mt-4'>
                    <h2><span style={{fontWeight:"800" , fontSize:"25px"}}>الايميل</span> : <span>{user.email}</span></h2>
                </div>
                <div className='mt-4'>
                    <h2><span style={{fontWeight:"800" , fontSize:"25px"}}>رقم المحمول</span> : <span>{user.phone_number}</span></h2>
                </div>
                <div className='mt-4'>
                    <h2><span style={{fontWeight:"800" , fontSize:"25px"}}>تفعيل الحساب</span> : {
                        user.is_verified === "0" ? (<span>الحساب غير مفعل</span>) : (<span>الحساب مفعل</span>)
                    }</h2>
                </div>
            </div>
        </div>
    )
}

export default Userprofile
