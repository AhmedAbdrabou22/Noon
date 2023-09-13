import React from 'react'
import logo from '../Images/noon-logo-ar.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    return (
        <Navbar expand="lg" className="navBar">
            <Container fluid={true}>
                <div className='d-flex justify-content-between align-items-center header' style={{width:"62%"}}>
                    <div className='w-25 brand'>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                    </div>
                    <div className='search w-75'>
                        <input type="search" placeholder='انت بتدور ع ايه' />
                    </div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='link'>English</Nav.Link>
                        <Nav.Link className='link'>
                            <span className='mx-2'>تسجيل الدخول</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="person" />
                        </Nav.Link>
                        <Nav.Link className='link'>
                            <span className='mx-2'>المفضله</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist.svg" alt="person" />
                        </Nav.Link>
                        <Nav.Link className='link'>
                            <span className='mx-2'>عربة التسوق</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="person" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
