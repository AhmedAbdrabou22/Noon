import React, { useEffect, useState } from 'react'
import { ErrorMsg, success } from '../../utility/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/GetAllCategoryAction';
import { GetGovern } from '../../redux/actions/GetGovern';
import baseUrl from '../../Api/baseUrl';
import imageDefault from "../../Images/logoLepgo.png"

const Uploadproduct = () => {
    const [cityId, setCityId] = useState(0);
    const [cityLive, setCityLive] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const categories = useSelector((state) => state.CategoryReducer.category);



    const getAllGovern = async () => {
        await dispatch(GetGovern())
    }

    useEffect(() => {
        getAllGovern()
    }, [])

    const governments = useSelector((state) => state.GetGoverReducer.getGovern)



    const FetchCities = async () => {
        const cities = await baseUrl.get(`/api/v1/cities/${cityId}`)
        setCityLive(cities)
    }


    useEffect(() => {
        FetchCities();
    }, [cityId])

    ///////////////////////////////////////
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [conditions, setConditions] = useState("");
    const [location, setLocation] = useState('');
    const [place, setPlace] = useState('');
    const [duration, setDuration] = useState(0);
    const [amount, setAmount] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [enum_durations, setenum_durations] = useState('');
    const [discount, setDiscount] = useState(0);
    const [available, setAvailable] = useState(1);
    const [loading, setLoading] = useState(true);
    const [idGovern, setIdgovern] = useState(0)
    const [city, setCity] = useState([])
    const handleLabelClick = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('file');
        fileInput.click();
    };

    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }


    return (
        <div>
            <form className='text-center py-3 mx-auto'>
                <div className='mx-auto text-center w-50'>
                    <div className="file-input">
                        <input type="file" id="file" accept="image/*" multiple={true} max={`4`} onChange={handleImageUpload} style={{ visibility: "hidden" }} />
                        <img src={imageDefault} alt="Select images" onClick={handleLabelClick} />
                    </div>
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}
                                style={{ width: "100px", height: "100px" }} className='mx-2'/>
                        ))}
                    </div>
                </div>
                <div className='mt-3'>
                    <select placeholder='تحديد نوع المنتج' className='w-50 fields' onChange={(e)=>setCategoryId(e.target.value)}>
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
                <div className='d-flex mx-auto text-center w-50 justify-content-between'>
                    <div>
                        <input type='text' placeholder='اسم المنتج' className='fields w-100 mt-4' />
                    </div>
                    <div>
                        <input type='number' placeholder='سعر المنتج' className='fields w-100 mt-4' />
                    </div>
                </div>
                <div className='d-flex w-50 mx-auto text-center justify-content-between mt-4 filed'>
                    <div>
                        <select className='fields' style={{ width: "150%" }} onChange={(e) => setCityId(e.target.value)}>
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
                        <select className='fields' style={{ width: "100%" }}>
                            <option hidden>مدينه</option>
                            {
                                cityLive.data ? (
                                    cityLive.data.data.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })
                                ) : null
                            }
                        </select>
                    </div>
                </div>
                <div className='d-flex mx-auto text-center w-50 justify-content-between mt-4'>
                    <div>
                        <input type='text' placeholder='مدة الحجز' className='fields w-100' />
                    </div>
                    <div className='w-50'>
                        <select className='fields' style={{ width: "95%" }}>
                            <option hidden>مدة الحجز</option>
                            <option>يوم</option>
                            <option>اسبوع</option>
                            <option>شهر</option>
                            <option>سنه</option>
                        </select>
                    </div>
                </div>
                <div style={{ textAlign: "right" }} className='w-50 mx-auto'>
                    <textarea placeholder='وصف المنتج' className='fields mt-4 w-100' cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <div style={{ textAlign: "right" }} className='w-50 mx-auto'>
                    <textarea placeholder='شروط حجز المنتج' className='fields mt-4 w-100' cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <button className='btn text-light bg-primary mt-2'>اضف المنتج الان</button>
            </form>
        </div>
    )
}

export default Uploadproduct
