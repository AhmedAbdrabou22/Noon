import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Loginuser from '../../Components/Auth/Loginuser';
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/esm/Spinner';
const Login = () => {
    const [email, password, loading, load, onChangeEmail, onChangePaswword, onSubmit] = Loginuser();
    const navigate = useNavigate();
    const [show2, setShow2] = useState(false);
    const [spinnerscroll, setSpineer] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    }
    useEffect(() => {
        if (loading === false) {
            setShow2(false)
            setSpineer(false)
            setTimeout(()=>{window.location.reload()} , 1000)
        } else {
            setSpineer(true)
        }
    }, [loading])
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSpineer(false)
        }
    }, [load])
    useEffect(() => {
        if (load !== false) {
            setSpineer(true)
        } else {
            setSpineer(false)
        }
    }, [load])
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
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className='mt-3'>
                            <label>كلمة السر</label>
                            <br />
                            <input type="password"
                                value={password}
                                onChange={onChangePaswword}
                            />
                        </div>
                        <div className='mt-3 text-center'>
                            <button className='btn' style={{ color: "rgb(56, 102, 223)", fontWeight: "bold", border: "none", outline: "none" }} onClick={onSubmit}>الدخول</button>
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
    )
}

export default Login
