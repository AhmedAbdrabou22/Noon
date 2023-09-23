import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Subtitle from '../../utility/Suptitle'
import Spinner from 'react-bootstrap/esm/Spinner'
import ProductCard from '../../Components/Cards/ProductCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const CategoryProductsIndex = () => {
    const [data, setData] = useState([]);
    const params = useParams();


    const FetchProductCaategory = async () => {
        try {
            const res = await axios.get(`https://api.lepgo.online/api/v1/categories/${params.id}`);
            setData(res.data);
        } catch (error) {
            console.error("حدث خطأ أثناء جلب البيانات:", error);
        }
    }
    useEffect(() => {
        FetchProductCaategory()
    }, [])

    return (
        <div className='containerCustomized'>
            <div className='mt-5'>
                {
                    data && data.data ? (
                        (
                            data.data.length !== 0 ? (
                                <Container>
                                    <Subtitle title="مقترحه لك" othertitle="احجز دلوقتي " />
                                </Container>
                            ) : null
                        )
                    ) : null
                }
                <div className='mt-3 p-3' style={{ background: "rgb(241, 244, 253)" }}>
                    <div className='row justify-content-center'>
                        {
                            data && data.data ? (
                            (
                                data.data.length !==0 ?(
                                    data.data.map((item) => {
                                        return (
                                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                                <div className='px-2 mb-3'>
                                                    <ProductCard key={item.id} id={item.id} image={item.image} desc={item.desc} title={item.title} amount={item.amount} totalRate={item.total_rate} discount={item.discount} />
                                                </div>
                                            </div>
                                        )
                                    })
                                ):(<p className='fs-1 text-center'>لاتوجد بيانات في هذا التصنيف</p>)
                            )
                            ) : (<Spinner />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductsIndex
