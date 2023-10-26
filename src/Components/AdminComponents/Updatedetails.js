import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UpdatedetailsAction from '../../redux/actions/UpdateDetailsAction';
import { ErrorMsg, success } from '../../utility/Toast';
const Updatedetails = () => {
    const dispatch = useDispatch();
    var user = {};
    if(localStorage.getItem('token')){
        user = JSON.parse(localStorage.getItem('user'))
    }
    const [address , setAddress] = useState("");
    const [loading , setLoading] = useState(true);

    const update_details = async (e) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(UpdatedetailsAction({
            name:user.name,
            address : address,
            city_id : "138",
            phone_number:"01125178289"
        }))
        setLoading(false)
    }
    useEffect(()=>{
        if(loading === false){
            success("تم تحديث البيانات")
        }
    }, [loading])
    return (
        <div>
            <form className='w-75 mx-auto py-4'>
                <div>
                    <label>الاسم</label>
                    <br/>
                    <input type='text' name="username" id="username" className='fields w-75 mt-4 mb-3' value={user.name} readOnly/>
                </div>
                <div>
                    <label>البريد الالكتروني</label>
                    <br/>
                    <input type='email' name="email" id="email"  className='fields w-75 mt-4 mb-3' value={user.email} readOnly/>
                </div>
                <div>
                    <label>العنوان</label>
                    <br/>
                    <input type='text' id="address" name="address" className='fields w-75 mt-4 mb-3' onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                {
                    address === "" ? (<button className='btn btn-primary text-center disabled'>تحديث البيانات</button>):(<button className='btn btn-primary text-center' onClick={update_details}>تحديث البيانات</button>)
                }
            </form>
        </div>
    )
}

export default Updatedetails
