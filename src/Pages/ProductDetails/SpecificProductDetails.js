import React, { useEffect, useState } from 'react'
import RelatedDataProduct from '../../Components/Productdetailsdata/RelatedDataProduct'
import GalleryImageProduct from '../../Components/Productdetailsdata/GalleryImageProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import InfoAboutBuyer from '../../Components/Productdetailsdata/InfoAboutBuyer'
import ProductCard from '../../Components/Cards/ProductCard'
const SpecificProductDetails = () => {
    const params = useParams();
    const [dataId, setData] = useState([]);
    // const [imgs, setImgs] = useState([]);
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

    let text = "";
    let description = ""
    let total_rate = ""
    let place = "";
    let price = "";
    // let duration = "";
    let imageOne = null
    let imageTwo = null
    let imageThee = null
    let imageFour = null
    let user = {}
    let reviews = [];
    let relatedProducts = [];
    let totalRate = 0;
    if (dataId.data) {
        text = dataId.data.title
        description = dataId.data.desc
        total_rate = dataId.data.total_rate
        price = dataId.data.price
        place = dataId.data.city
        user = dataId.data.user
        totalRate = dataId.data.total_rate;
        reviews = dataId.data.reviews;
        relatedProducts = dataId.data.related_products;

        // console.log(dataId.data.duration);

        for (let i = 0; i < dataId.data.images.length; i++) {
            for (let j = 0; j < 1; j++) {
                if (i === 0) {
                    imageOne = dataId.data.images[i].image;
                } else if (i === 1) {
                    imageTwo = dataId.data.images[i].image;
                } else if (i === 2) {
                    imageThee = dataId.data.images[i].image;
                } else if (i === 3) {
                    imageFour = dataId.data.images[i].image;
                }
            }
        }
    }

    if (dataId && dataId.data) {
        console.log(dataId.data);
    }

    return (
        <div className='containerCustomized' style={{ background: "white", padding: "px" }}>
            <Row className='py-5'>
                <Col xs="12" sm="12" md="12" lg="4">
                    <GalleryImageProduct imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThee} imageFour={imageFour} />
                </Col>
                <Col xs="12" sm="12" md="12" lg="5">
                    <div><RelatedDataProduct title={text} desc={description} price={price} rate={total_rate} place={place} /></div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="3">
                    <div><InfoAboutBuyer user={user} rate={totalRate} reviews={reviews} /></div>
                </Col>
            </Row>
            <div className='row'>
            {
                relatedProducts.map((relatedProduct) => {
                    return (
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <div className='px-2 mb-3'>
                                <ProductCard key={relatedProduct.id} image={relatedProduct.image} desc={relatedProduct.desc} title={relatedProduct.title} amount={relatedProduct.amount} id={relatedProduct.id} totalRate={relatedProduct.total_rate} discount={relatedProduct.discount} />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SpecificProductDetails
