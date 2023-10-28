import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UpdatedetailsAction from '../../redux/actions/UpdateDetailsAction';
import { ErrorMsg, success } from '../../utility/Toast';
import { GetGovern } from '../../redux/actions/GetGovern';
import baseUrl from '../../Api/baseUrl';
const Updatedetails = () => {
    const dispatch = useDispatch();
    var user = {};
    if (localStorage.getItem('token')) {
        user = JSON.parse(localStorage.getItem('user'))
    }
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(true);
    const [cityId , setCityId] = useState(0);
    const [idcityDisabeled , SetidcityDisabeled] = useState(0);
    const [cityLive , setCityLive] = useState([]);

    console.log(idcityDisabeled);

    const update_details = async (e) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(UpdatedetailsAction({
            name: user.name,
            address: address,
            city_id: "138",
            phone_number: "01125178289"
        }))
        setLoading(false)
    }
    useEffect(() => {
        if (loading === false) {
            success("تم تحديث البيانات")
            setAddress("");
            setCityId(0)
            SetidcityDisabeled(0)
        }
    }, [loading])

    const getAllGovern = async ()=>{
        await  dispatch(GetGovern())
    }

    useEffect(() => {
        getAllGovern()
    }, [])

    const governments = useSelector((state) => state.GetGoverReducer.getGovern)

    const FetchCities = async ()=>{
        const cities =await baseUrl.get(`/api/v1/cities/${cityId}`)
        setCityLive(cities)
    }


    useEffect(()=>{
        FetchCities();
    } , [cityId])

    return (
        <div>
            <form className='w-75 mx-auto py-4'>
                <div>
                    <label>الاسم</label>
                    <br />
                    <input type='text' name="username" id="username" className='fields w-75 mt-4 mb-3' value={user.name} readOnly />
                </div>
                <div>
                    <label>البريد الالكتروني</label>
                    <br />
                    <input type='email' name="email" id="email" className='fields w-75 mt-4 mb-3' value={user.email} readOnly />
                </div>
                <div>
                    <label>العنوان</label>
                    <br />
                    <input type='text' id="address" name="address" value={address} className='fields w-75 mt-4 mb-3' onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>المحافظه</label>
                    <br />
                    <select className='fields w-75 mt-4' onChange={(e)=>setCityId(e.target.value)}>
                        <option hidden value="0">اختر المحافظه</option>
                        <option  value={0}>اختر المحافظه</option>
                        {
                            governments && governments.data ? (
                                governments.data.data.map((item)=>{
                                    return(
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })
                            ):null
                        }
                    </select>
                </div>
                <div>
                    <label className='mt-3'>المدينه</label>
                    <br />
                    <select className='fields w-75 mt-4' onChange={(e)=>SetidcityDisabeled(e.target.value)}>
                        <option hidden>اختر المدينه</option>
                        {
                            cityLive.data ? (
                                cityLive.data.data.map((item)=>{
                                    return(
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })
                            ):null
                        }
                    </select>
                </div>
                {
                idcityDisabeled ===  0 ? (<button className='mt-4 btn btn-primary text-center disabled'>تحديث البيانات</button>) : (<button className='mt-4 btn btn-primary text-center' onClick={update_details}>تحديث البيانات</button>)
                }
            </form>
        </div>
    )
}

export default Updatedetails
