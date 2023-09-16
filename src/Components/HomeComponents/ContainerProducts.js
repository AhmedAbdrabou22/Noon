import React from 'react'
import ProductCard from '../Cards/ProductCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions/GetAllProducts'
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContainerProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const products = useSelector(state => state.ProductReducer.product)
    if (products) {
        console.log(products.data);
    }
    return (
        <div className='containerCustomized'>
            <div className='mt-5 p-2' style={{background:"rgb(241, 244, 253)"}}>
                <div className='row'>
                    {
                        products && products.data ? (
                            products.data.slice(1,7).map((item) => {
                                return (
                                    <div className='col-lg-2 col-md-4 col-sm-6'>
                                        <div className='px-2 mb-3'>
                                            <ProductCard key={item.id} image={item.image} desc={item.desc} title={item.title}  amount={item.amount}/>
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

export default ContainerProducts
