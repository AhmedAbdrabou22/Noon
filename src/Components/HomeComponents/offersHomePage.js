import React, { useEffect } from 'react'
import { getSomeProducts } from '../../redux/actions/GetAllProducts'
import { useDispatch, useSelector } from "react-redux"
import Spinner from 'react-bootstrap/Spinner';
import Subtitle from '../../utility/Suptitle'
import Container from 'react-bootstrap/Container';
import ProductCard from '../Cards/ProductCard'

const OffersHomePage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSomeProducts())
    }, [])


    const data = useSelector(state => state.ProductReducer.data)
    return (
        <div className='containerCustomized'>
            <div  style={{marginTop:"100px"}}>
                <Container>
                    <Subtitle title="العروض" othertitle="اشتري دلوقتي" />
                </Container>
                <div className='mt-3 p-3' style={{ background: "rgb(241, 244, 253)" }}>
                    <div className='row'>
                        {
                            data && data.data ? (
                                data.data.map((item) => {
                                    return (
                                        <div className='col-lg-2 col-md-4 col-sm-6'>
                                            <div className='px-2 mb-3'>
                                                <ProductCard key={item.id} id={item.id} image={item.image} desc={item.desc} title={item.title} amount={item.amount} totalRate={item.total_rate} discount={item.discount} />
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
    )
}

export default OffersHomePage
