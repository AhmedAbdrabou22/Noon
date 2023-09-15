import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import One from '../../Images/one.png'
// import two from '../../Images/two.jpg'
// import three from '../../Images/three.jpg'
// import four from '../../Images/two.jpg'
// import five from '../../Images/five.jpg'
// import six from '../../Images/six.avif'
import hour from '../../Images/hour.jpg'
import dish from '../../Images/dish.jpg'
import lwasem from '../../Images/lwasem.jpg'
import choose from '../../Images/choose.jpg'
import tv from '../../Images/tv.avif'
import acc from '../../Images/acc.avif'
import micro from '../../Images/micro.avif'
import offers from '../../Images/offers.avif'
const collectionHome = () => {
    return (

        <Container>
            <div className='d-flex justify-content-between align-items-center mt-5 collection' dir='ltr'>
                <div className='discount p-3' style={{ background: "white" , width:"32.5%" }}>
                    <div style={{ marginBottom: "10px" }}><img src={One} alt="data" style={{width:"100%"}}/></div>
                    <div><img src={One} alt="data" style={{width:"100%"}}/></div>
                </div>
                <div className='offers p-3'style={{ background: "white"  , width:"32.5%"}}>
                    <div className='d-flex justify-content-between align-items-center offerOne'>
                        <div className='dish'>
                            <img src={dish} alt="data" />
                        </div>
                        <div className='choose'>
                            <img src={choose} alt="data" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center offerTwo mt-2'>
                        <div className='hour'>
                            <img src={hour} alt="data" />
                        </div>
                        <div className='lwasem'>
                            <img src={lwasem} alt="data" />
                        </div>
                    </div>
                </div>
                <div className='offers p-3'style={{ background: "white" , width:"32.5%" }}>
                    <div className='d-flex justify-content-between align-items-center offerOne'>
                        <div className='dish'>
                            <img src={tv} alt="data" />
                        </div>
                        <div className='choose'>
                            <img src={micro} alt="data" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center offerTwo mt-2'>
                        <div className='hour'>
                            <img src={acc} alt="data" />
                        </div>
                        <div className='lwasem'>
                            <img src={offers} alt="data" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default collectionHome
