import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from "react-bootstrap"
import Uploadproduct from './Uploadproduct';
const Adminpagecomponent = () => {
    return (
        <div>
            <div className='dash'>
                <Container className='mt-3'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='justify-content-between'>
                            <Col sm={2} style={{ borderRadius: "10px", height: "85vh", background: "white" }} className='shadow'>
                                <Nav variant="pills" className="flex-column" style={{ padding: "10px", fontSize: "18px" }}>
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
                            <Col sm={9} style={{ background: "white", borderRadius: "10px" }} className='shadow'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first"><Uploadproduct /></Tab.Pane>
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
            <h1 className='dashIt text-center mt-5'>يرجي فتح لوحة التحكم من الكمبيوتر الشخصي للتعامل بسهولة</h1>
        </div>
    )
}

export default Adminpagecomponent
