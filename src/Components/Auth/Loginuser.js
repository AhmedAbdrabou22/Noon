import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/Authaction';
import { ErrorMsg, success } from '../../utility/Toast';
const Loginuser = () => {
    const [load , setLoad] = useState(false);

    const dispatch = useDispatch();
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePaswword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit =async () => {
        setLoad(true)
        setLoading(true)
        await dispatch(loginUser({
            email,
            password
        }))
        setLoading(false)
    }
    var user = {};
    const dataLogin = useSelector(state => state.UserReducer.loginUSer);
    useEffect(()=>{
        if(loading === false){
            if(dataLogin){
                localStorage.setItem('token' , dataLogin.data.token)
                localStorage.setItem('user' , JSON.stringify(dataLogin.data.user))
                success("تم تسجيل الدخول بنجاح")
            }else{
                ErrorMsg('هناك خطا ماا')
            }
        }
    } , [loading])

    return [email , password , loading ,load  ,onChangeEmail , onChangePaswword ,onSubmit]
}

export default Loginuser
