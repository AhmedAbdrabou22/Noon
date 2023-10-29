import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getSomeProducts, getSubCategoryProducts } from '../../redux/actions/GetAllProducts';
import ProductCard from "../../Components/Cards/ProductCard"
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';
import { getAllCategory } from '../../redux/actions/GetAllCategoryAction';
const AllProducts = () => {
    const dispatch = useDispatch();
    const [searchPrice , setSearchPrice] = useState('')
    // var products = [];
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getSubCategoryProducts())
        dispatch(getSomeProducts())
    }, [])

    var products = useSelector((state) => state.ProductReducer.product)
    var products2 = useSelector((state) => state.ProductReducer.SubCategoryproductData)
    var products3 = useSelector((state) => state.ProductReducer.data)
    var allProductsData = [];
    if (products.data && products2.data && products3.data) {
        // setallProducts(products.data.concat(products2.data, products3.data))
        allProductsData = products.data.concat(products2.data, products3.data)
    }

    /**Search */
    const [searchword, setSearchWord] = useState('');



    if (searchword !== "") {
        const filterProducts = allProductsData.filter(item =>
            item.title.charAt(0).toLowerCase() === searchword.charAt(0).toLowerCase()
        )
            allProductsData = filterProducts;
    }
    if (searchPrice !== 0 && searchPrice !=="" ) {
        const filterProducts = allProductsData.filter(item =>
            item.amount === searchPrice
        )
            allProductsData = filterProducts;
    }

    return (
        <div>
            <Container fluid={false} className='mt-5'>
                <div>
                    <div className='mx-auto d-flex justify-content-between w-75'>
                        <div>
                            <input type='search' value={searchword} onChange={(e) => { setSearchWord(e.target.value) }} placeholder='تبحث عن ماذا؟؟' name='searh' id="search" className='fields shadow' />
                        </div>
                        <div>
                            <input type='number' value={searchPrice} onChange={(e) => { setSearchPrice(e.target.value) }} placeholder='ابحث بالسعر' name='searh' id="search" className='fields shadow' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        {
                            allProductsData ? (
                                allProductsData.map((item) => {
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
            </Container>
        </div>
    )
}

export default AllProducts
