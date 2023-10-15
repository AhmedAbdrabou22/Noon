import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
const Login = () => {
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    }
    return (
        <div>
            <span style={{ background: "transparent", color: "blue", border: "none" }} onClick={handleShow2}>
                قم بتسجيل الدخول
            </span>
            <Modal show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='text-center'>
                    <h2 style={{ fontWeight: "bolder" }}>تسجيل الدخول</h2>
                    <form style={{ textAlign: "right" }} className='form'>
                        <div className='mt-3'>
                            <label>البريد الالكتروني</label>
                            <br />
                            <input type="email"
                            />
                        </div>
                        <div className='mt-3'>
                            <label>كلمة السر</label>
                            <br />
                            <input type="password"
                            />
                        </div>
                        <div className='mt-3 text-center'>
                            <button className='btn' style={{ color: "rgb(56, 102, 223)", fontWeight: "bold", border: "none", outline: "none" }}>الدخول</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Login
