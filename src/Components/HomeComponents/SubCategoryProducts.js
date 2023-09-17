import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSubCategoryProducts } from '../../redux/actions/GetAllProducts'
import ProductCard from '../Cards/ProductCard'
import Spinner from 'react-bootstrap/esm/Spinner'
import Container from 'react-bootstrap/esm/Container'
import Suptitle from '../../utility/Suptitle'

const SubCategoryProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubCategoryProducts())
    }, [])


    const subProduct = useSelector(state => state.ProductReducer.SubCategoryproductData)

    if (subProduct) {
        console.log(subProduct);
    }

    return (
        <div className='containerCustomized'>
            <div  style={{marginTop:"80px"}}>
                <Container>
                    <Suptitle title="الافضل للايجاار" othertitle="شوف كله"/>
                </Container>
                <div className='row mt-4'>
                    {
                        subProduct && subProduct.data ? (
                            subProduct.data.slice(1, 7).map((item) => {
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
    )
}

export default SubCategoryProducts
