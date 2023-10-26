import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Container} from "react-bootstrap"
const Adminpagecomponent = () => {
    return (
        <div>
            <Container className='mt-3'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='justify-content-between'>
                        <Col sm={2} style={{borderRadius:"10px" , height:"85vh"}} className='shadow'>
                            <Nav variant="pills" className="flex-column" style={{padding:"10px" , fontSize:"18px"}}>
                                <Nav.Item className='tabs'>
                                    <Nav.Link eventKey="first">رفع منتج</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='tabs'>
                                    <Nav.Link eventKey="second">تحديث البيانات</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='tabs'>
                                    <Nav.Link eventKey="third">الملف الشخصي</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='tabs'>
                                    <Nav.Link eventKey="fourth">منتجات تم رفعها </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='tabs'>
                                    <Nav.Link eventKey="fifth">تقارير حركة المنتجات</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="third">third tab content</Tab.Pane>
                                <Tab.Pane eventKey="fourth">fourth tab content</Tab.Pane>
                                <Tab.Pane eventKey="fifth">fifth tab content</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}

export default Adminpagecomponent
