import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom"
const ProductCard = ({ image, title, desc, amount, totalRate, discount , id}) => {
    return (
        <div>
            <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
                <Card style={{ maxHeight: "100%" }}>
                    <Card.Img variant="top" src={image} style={{ height: "35vh" }} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "13px", fontWeight: "bold" }}>{title}</Card.Title>
                        <Card.Text>
                            <p className='textDescription'>{desc}</p>
                            <p style={{ fontWeight: "bold", color: "rgb(64, 69, 83)", fontSize: "18px" }}>{amount} جنيه</p>
                        </Card.Text>
                        <div className='mt-5'>
                            <div className='d-flex justify-content-between align-baseline'>
                                <div className='type'><p>اكسبرس</p></div>
                                <div className='rate d-flex justify-content-center align-baseline' style={{ background: "rgb(56, 174, 4)", color: "white" }}>
                                    {totalRate}  <FontAwesomeIcon icon={faStar} style={{ width: "10px", marginRight: "5px" }} />
                                </div>
                            </div>
                            <div className='discount'>
                                {
                                    discount !== "0" ? (
                                        <div className='discountCount w-75 mt-3 text-center' style={{ borderRadius: "10px", border: "1px dashed rgb(56, 174, 4)", color: "rgb(56, 174, 4)" }}>
                                            <span style={{ fontSize: "15px", fontWeight: "bolder" }}>الخصم :</span> {discount}%
                                        </div>
                                    ) : (<div className='discountCount w-75 mt-3 text-center' style={{ borderRadius: "10px", border: "1px dashed rgb(56, 174, 4)", color: "rgb(56, 174, 4)" }}>
                                        <span style={{ fontSize: "15px", fontWeight: "bolder" }}>لا يوجد خصم</span>
                                    </div>)
                                }
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default ProductCard
