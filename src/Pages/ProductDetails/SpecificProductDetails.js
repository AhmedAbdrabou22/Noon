import React, { useEffect, useState } from 'react'
import RelatedDataProduct from '../../Components/Productdetailsdata/RelatedDataProduct'
import GalleryImageProduct from '../../Components/Productdetailsdata/GalleryImageProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const SpecificProductDetails = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const FetchProductById = async () => {
        try {
            const res = await axios.get(`https://api.lepgo.online/api/v1/products/${params.id}`);
            setData(res.data);
        } catch (error) {
            console.error("حدث خطأ أثناء جلب البيانات:", error);
        }
    }
    useEffect(() => {
        FetchProductById()
    }, [])


    if(data && data.data){
        console.log(data.data);
    }
    
    return (
        <div className='containerCustomized'>
            <div className='d-flex justify-content-between align-items-center mt-5 '>
                <div><RelatedDataProduct /></div>
                <div><GalleryImageProduct /></div>
            </div>
        </div>
    )
}

export default SpecificProductDetails
