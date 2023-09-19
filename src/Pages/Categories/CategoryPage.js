import React, { useEffect, useState } from 'react'
import CaursolSlider from '../../utility/CaursolSlider'
import Visita from '../../utility/Visita'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Subtitle from '../../utility/Suptitle'
import Spinner from 'react-bootstrap/esm/Spinner'
import ProductCard from '../../Components/Cards/ProductCard'
const CategoryPage = () => {
    const [data, setData] = useState([]);
    const params = useParams();


    const FetchProductCaategory = async () => {
        const res = await axios.get(`https://api.lepgo.online/api/v1/categories/${params.id}`);
        setData(res.data)
    }
    useEffect(() => {
        FetchProductCaategory()
    }, [])

    return (
        <div>
            <CaursolSlider />
            <Visita />
            <div className='containerCustomized'>
                <div className='mt-5'>
                    <Container>
                        <Subtitle title="مقترحه لك" othertitle="" />
                    </Container>
                    <div className='mt-3 p-3' style={{ background: "rgb(241, 244, 253)" }}>
                        <div className='row'>
                            {
                                data && data.data ? (
                                    data.data.slice(1, 7).map((item) => {
                                        return (
                                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                                <div className='px-2 mb-3'>
                                                    <ProductCard key={item.id} image={item.image} desc={item.desc} title={item.title} amount={item.amount} totalRate={item.total_rate} discount={item.discount} />
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (<Spinner animation="grow" />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
