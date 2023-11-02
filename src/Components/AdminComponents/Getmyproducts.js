import React, { useEffect } from 'react'
import ProductCard from '../Cards/ProductCard'
import { useDispatch, useSelector } from "react-redux"
import { GetmyProducts } from '../../redux/actions/GetMyProductsAction'
import { Spinner } from 'react-bootstrap'
const GetmyproductsComponent = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetmyProducts());
    }, [])

    const myProducts = useSelector(state => state.MyProducts.myproducts)
    if(myProducts){
        console.log(myProducts.products);
    }
    return (
        <div>
            <div className='row mt-2 py-2'>
                {
                    myProducts && myProducts.products ? (
                        myProducts.products.map((item) => {
                            return (
                                <div className='col-lg-3 col-md-4 col-sm-6'>
                                    <div className='px-2 mb-3'>
                                        <ProductCard key={item.id} image={item.image} desc={item.desc} title={item.title} amount={item.amount} id={item.id} totalRate={item.total_rate} discount={item.discount} />
                                    </div>
                                </div>
                            )
                        })
                    ) : (<Spinner animation="grow" />)
                }
            </div>
        </div>
    )
}

export default GetmyproductsComponent
