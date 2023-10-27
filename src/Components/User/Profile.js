import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from "react-bootstrap"
import Updatedetails from "../AdminComponents/Updatedetails"
import Userprofile from './Userprofile';
const Profile = () => {
    return (
        <div>
            <div className='dash'>
                <Container className='mt-3'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='justify-content-between'>
                            <Col sm={2} style={{ borderRadius: "10px", height: "85vh", background: "white" }} className='shadow'>
                                <Nav variant="pills" className="flex-column" style={{ padding: "10px", fontSize: "18px" }}>
                                    <Nav.Item className='tabs'>
                                        <Nav.Link eventKey="first">تحديث البيانات</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='tabs'>
                                        <Nav.Link eventKey="second">الملف الشخصي</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='tabs'>
                                        <Nav.Link eventKey="third">تفعيل الايميل</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} style={{ background: "white", borderRadius: "10px" }} className='shadow'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first"><Updatedetails/></Tab.Pane>
                                    <Tab.Pane eventKey="second"><Userprofile/></Tab.Pane>
                                    <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        </div>
    )
}

export default Profile
