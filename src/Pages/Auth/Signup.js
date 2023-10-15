import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Register from '../../Components/Auth/Register';
import Dropdown from 'react-bootstrap/Dropdown';

const Signup = () => {
    const [name, email, password, phone_number, loading, onChangeName, onChangeEmail, onChangePassword, onChangePhone, onSubmit] = Register();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (loading === false) {
            if (localStorage.getItem('token')) {
                setShow(false)
            }
        }
    }, [loading])
    let userData = {};
    if (localStorage.getItem('user')) {
        userData = JSON.parse(localStorage.getItem("user"));
    }
    return (
        <div>
            <div className='registerCover'>
                {
                    userData.name ? (
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle style={{background:"transparent"  , border:"none", color:"black"}} id="dropdown-basic">
                                    {userData.name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">الصفحة الشخصيه</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">تسجيل الخروج</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="person" /> */}
                        </div>
                    ) : (
                        <div>
                            <span className='mx-2' onClick={handleShow}>تسجيل الدخول</span>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="person" />
                        </div>
                    )
                }
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className='text-center'>
                        <h2 style={{ fontWeight: "bolder" }}>انشاء حساب</h2>
                        <p className='mt-4'>هل لديك حساب بالفعل؟ <a style={{ textDecoration: "none" }} href="*">تسجيل الدخول</a></p>
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
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        </div >
    )
}

export default Signup
