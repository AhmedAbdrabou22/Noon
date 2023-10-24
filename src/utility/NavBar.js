import React from 'react'
import logo from '../Images/noon-logo-ar.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signup from '../Pages/Auth/Signup';
import download from "../Images/download.jpeg"

const NavBar = () => {
    let user = {};
    if (localStorage.getItem('user')) {
        console.log(JSON.parse(localStorage.getItem('user')));
        user = JSON.parse(localStorage.getItem('user'));
    }
    return (
        <Navbar expand="lg" className="navBar">
            <Container fluid={true}>
                <div className='d-flex justify-content-between align-items-center header' style={{ width: "55%" }}>
                    <div className='brand'>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                    </div>
                    <div className='search'>
                        <input type="search" placeholder='انت بتدور ع ايه' />
                    </div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navs m-auto">
                        <Nav.Link className='link'>English</Nav.Link>
                        <Nav.Link className='link' style={{ color: "inherit" }}>
                            <Signup />
                        </Nav.Link>
                        <Nav.Link className='link'>
                            <span className='mx-2'>المفضله</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist.svg" alt="person" />
                        </Nav.Link>
                        <Nav.Link className='link'>
                            <span className='mx-2'>عربة التسوق</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="person" />
                        </Nav.Link>
                        {
                            user.email === "aabdrabou819@gmail.com" ? (
                                <Nav.Link className='link' href="/admin">
                                    <span className='mx-2'>لوحة التحكم</span>
                                </Nav.Link>
                            ) : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
