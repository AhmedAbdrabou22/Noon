import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getSomeProducts, getSubCategoryProducts } from '../../redux/actions/GetAllProducts';
import ProductCard from "../../Components/Cards/ProductCard"
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';
const AllProducts = () => {
    const dispatch = useDispatch();
    // var products = [];
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getSubCategoryProducts())
        dispatch(getSomeProducts())
    }, [])
    var products = useSelector((state) => state.ProductReducer.product)
    var products2 = useSelector((state) => state.ProductReducer.SubCategoryproductData)
    var products3 = useSelector((state) => state.ProductReducer.data)
    var allProducts = [];
    if (products.data && products2.data && products3.data) {
        allProducts = products.data.concat(products2.data, products3.data)
        console.log(allProducts);
    }
    if (allProducts.length > 0) {
        console.log(allProducts);
    }
    return (
        <div>
            <Container>
                <div className='row'>
                    {
                        allProducts ? (
                            allProducts.map((item) => {
                                return (
                                    <div className='col-lg-2 col-md-4 col-sm-6'>
                                        <div className='px-2 mb-3'>
                                            <ProductCard key={item.id} image={item.image} desc={item.desc} title={item.title} amount={item.amount} id={item.id} totalRate={item.total_rate} discount={item.discount} />
                                        </div>
                                    </div>
                                )
                            })
                        ) : (<Spinner animation="grow" />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllProducts
