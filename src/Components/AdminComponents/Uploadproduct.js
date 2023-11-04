import React, { useEffect, useState } from 'react'
import { ErrorMsg, InfoMsg, success } from '../../utility/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/GetAllCategoryAction';
import { GetGovern } from '../../redux/actions/GetGovern';
import baseUrl from '../../Api/baseUrl';
import imageDefault from "../../Images/logoLepgo.png"
import {StoreProduct} from '../../redux/actions/UploadProduct';
import axios from 'axios';

const Uploadproduct = () => {
    let user = {};
    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
    }


    const dispatch = useDispatch();


    // Select Images For Products
    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
    };


    // Categories
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const categories = useSelector(state => state.CategoryReducer.category)

    //Get All Governments
    useEffect(() => {
        dispatch(GetGovern())
    }, [])

    const governments = useSelector(state => state.GetGoverReducer.getGovern)

    // Data Use State
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [enum_durations, setEnum_durations] = useState("");
    const [description, setDescription] = useState("");
    const [conditions, setConditions] = useState("");
    const [categoryID, setCategoryID] = useState(0);
    const [available, setAvailable] = useState(1);
    const [location, setLocation] = useState("");
    const [cityId, setCityID] = useState(0);
    const [idGovern, setIdgovern] = useState(0)
    const [allCity, setAllCity] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [loading, setLoading] = useState(true);



    //Methods 
    const onSelectLocation = (e) => {
        setLocation(e.target.value)
        setIdgovern(e.target.value)
        console.log(location);
        console.log(cityId);
    }

    const onSelectCity = (e) => {
        setCityID(e.target.value)
    }

    //Get All Cities
    const fetchCities = async () => {
        let citiesData = await axios.get(`https://api.lepgo.online/api/v1/cities/${idGovern}`)
        setAllCity(citiesData)
    }

    useEffect(() => {
        fetchCities()
    }, [idGovern])


    /**Handle All Data */
    const handleSubmitProduct = async (e) => {
        e.preventDefault();

        if (images.length <= 0 || title === "" || categoryID === 0 || amount === "" || description === "" || conditions === "" || location === "") {
            return InfoMsg("يرجي ادخال البيانات كامله")
        }
        const formData = new FormData();
        formData.append("title", title)
        formData.append("desc", description)
        formData.append("conditions", conditions)
        formData.append("category_id", categoryID)
        formData.append("location", location)
        formData.append("amount", amount)
        images.map((image) => formData.append("images[]", image))
        formData.append("duration", duration)
        formData.append("city_id", cityId)
        formData.append("enum_durations", enum_durations)
        formData.append("discount", discount)
        formData.append("available", available)

        if (user) {
            if (loading === true && user.is_verified === "1") {
                InfoMsg("جاري رفع المنتج الان")
                await dispatch(StoreProduct(formData))
                setLoading(false)
            }
        }
    }
    const allUpload = useSelector(state=>state.UploadProductRedcuer.postProducts);
    if(allUpload){
        if(allUpload.data){
            success("تم رفع المنتج")
        }
    }
    return (
        <div>
            <form className='text-center py-3 mx-auto'>
                <div className='mx-auto text-center w-50'>
                    <div className="file-input">
                        <input type="file" id="file" accept="image/*" multiple={true} max={`4`} onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                        <img src={imageDefault} alt="Select images" onClick={handleLabelClick} className='w-50' />
                    </div>
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}
                                style={{ width: "100px", height: "100px" }} className='mx-2' />
                        ))}
                    </div>
                </div>
                <div className='mt-3'>
                    <select placeholder='تحديد نوع المنتج' className='w-50 fields' onChange={(e) => setCategoryID(e.target.value)}>
                        <option hidden>اختر التصنيف</option>
                        {
                            categories.data ? (
                                categories.data.map((item) => {
                                    return (
                                        <option value={item.id}>{item.title_ar}</option>
                                    )
                                })
                            ) : null
                        }
                    </select>
                </div>
                <div className='descData mx-auto'>
                    <div>
                        <input type='text' placeholder='اسم المنتج' value={title} onChange={(e) => setTitle(e.target.value)} className='fields descDataOther mt-4' />
                    </div>
                </div>
                <div className='w-50 mx-auto'>
                    <div>
                        <input type='number' placeholder='سعر الحجز' value={amount} className='fields w-100 mt-4' onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </div>

                <div className='d-flex mx-auto text-center w-50 justify-content-between mt-4'>
                    <div>
                        <input type='text' placeholder='مدة الحجز' value={duration} className='fields w-100' onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <div className='w-50'>
                        <select className='fields' style={{ width: "95%" }} onChange={(e) => setEnum_durations(e.target.value)}>
                            <option hidden>مدة الحجز</option>
                            <option value="day">يوم</option>
                            <option value="week">اسبوع</option>
                            <option value="month">شهر</option>
                            <option value="year">سنه</option>
                        </select>
                    </div>
                </div>


                <div className='d-flex w-50 mx-auto text-center justify-content-between mt-4 filed'>
                    <div>
                        <select className='fields mt-2' style={{ width: "150%" }} onChange={onSelectLocation}>
                            <option hidden>اختر المحافظه</option>
                            {
                                governments && governments.data ? (
                                    governments.data.data.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })
                                ) : null
                            }
                        </select>
                    </div>
                    <div>
                        <select className='fields mt-2' style={{ width: "100%" }} name="cityId"
                            onChange={onSelectCity}>
                            <option hidden>مدينه</option>
                            {
                                allCity.data ? (
                                    allCity.data.data.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })
                                ) : null
                            }
                        </select>
                    </div>
                </div>
                <div style={{ textAlign: "right" }} className='descData mx-auto'>
                    <textarea placeholder='وصف المنتج' className='fields mt-4 w-100' value={description} onChange={(e) => setDescription(e.target.value)} cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <div style={{ textAlign: "right" }} className='descData mx-auto'>
                    <textarea placeholder='شروط حجز المنتج' value={conditions} onChange={(e) => setConditions(e.target.value)} className='fields mt-4 w-100' cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <button className='btn text-light bg-primary mt-2' onClick={handleSubmitProduct}>اضف المنتج الان</button>
            </form>
        </div>
    )
}

export default Uploadproduct
