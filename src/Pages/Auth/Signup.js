import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Register from '../../Components/Auth/Register';
import Dropdown from 'react-bootstrap/Dropdown';
import Login from './Login';
import Spinner from 'react-bootstrap/Spinner';
import { success } from '../../utility/Toast';

const Signup = () => {
    const [name, email, password, phone_number, loading, load, onChangeName, onChangeEmail, onChangePassword, onChangePhone, onSubmit] = Register();
    const [show, setShow] = useState(false);
    const [spinnerscroll, setSpineer] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (loading === false) {
            if (localStorage.getItem('token')) {
                setShow(false)
                setSpineer(false)
                // window.location.reload();
            }
        }else{
            setSpineer(true)
        }
    }, [loading])
    let userData = {};
    if (localStorage.getItem('user')) {
        userData = JSON.parse(localStorage.getItem("user"));
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSpineer(false)
        }
    }, [load])
    const logOut = () => {
        localStorage.removeItem('user')
        window.location.href = "/"
    }
    useEffect(() => {
        if (load !== false) {
            setSpineer(true)
        }
    }, [load])
    
    const x = useRef(null);
    const addStyle= ()=>{
        var signUpModal = document.querySelector('.signUpModal')
        signUpModal.style.display="none"
    }
    return (
        <div>
            <div className='registerCover'>
                {
                    userData.name ? (
                        <div>
                            <Dropdown style={{ marginTop: "-3px" }}>
                                <Dropdown.Toggle style={{ background: "transparent", color: "rgba(0,0,0,0.65)", border: "none" }} id="dropdown-basic">
                                    {userData.name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>الصفحة الشخصيه</Dropdown.Item>
                                    <Dropdown.Item onClick={logOut}>تسجيل الخروج</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="person" /> */}
                        </div>
                    ) : (
                        <div>
                            <span className='mx-2' style={{ color: "rgba(0,0,0,0.65)" }} onClick={handleShow}>تسجيل الدخول</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="person" />
                        </div>
                    )
                }
                <Modal show={show} onHide={handleClose} centered ref={x} className='signUpModal'>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className='text-center'>
                        <h2 style={{ fontWeight: "bolder" }}>انشاء حساب</h2>
                        <p className='mt-4'>هل لديك حساب بالفعل؟ <a onClick={addStyle}  style={{ textDecoration: "none" }} href="*"><Login /></a></p>
                        <form style={{ textAlign: "right" }} className='form'>
                            <div>
                                <label>الاسم</label>
                                <br />
                                <input type="text"
                                    value={name}
                                    onChange={onChangeName}
                                />
                            </div>
                            <div className='mt-3'>
                                <label>البريد الالكتروني</label>
                                <br />
                                <input type="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className='mt-3'>
                                <label>كلمة السر</label>
                                <br />
                                <input type="password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <div className='mt-3'>
                                <label>رقم المحمول</label>
                                <br />
                                <input type='tel'
                                    value={phone_number}
                                    onChange={onChangePhone}
                                />
                            </div>
                            <div className='mt-3 text-center'>
                            <button className='btn' style={{ color: "rgb(56, 102, 223)", fontWeight: "bold", border: "none", outline: "none" }} onClick={onSubmit}>انشاء حساب</button>
                            </div>
                            {
                                spinnerscroll ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                ) : null
                            }
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        </div >
    )
}

export default Signup
