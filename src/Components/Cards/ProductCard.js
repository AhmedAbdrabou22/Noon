import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductCard = ({image , title ,desc , amount}) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} style={{height:"35vh"}}/>
                <Card.Body>
                    <Card.Title style={{fontSize:"16px"}}>{title}</Card.Title>
                    <Card.Text>
                        <p className='textDescription'>{desc}</p>
                        <p style={{fontWeight:"bold" ,color:"rgb(64, 69, 83)" , fontSize:"18px"}}>{amount} جنيه</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
