import React, { useEffect, useState } from 'react'
import { createNewUsers } from '../../redux/actions/Authaction'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorMsg, InfoMsg, success } from '../../utility/Toast'
const Register = () => {
    const dispatch = useDispatch();

    const [load , setLoad] = useState(false);

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phone_number , setPhone] = useState("")
    const [loading , setLoading] = useState(true)

    const onChangeName = (event)=>{
        setName(event.target.value);
    }
    const onChangeEmail = (event)=>{
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onChangePhone = (event) => {
        setPhone(event.target.value)
    }
    const validation = ()=>{
        if(name === ""){
            return ErrorMsg("من فضلك ادخل الاسم")
        }
        if(email === ""){
            return ErrorMsg("من فضلك ادخل الايميل")
        }
        if(password === ""){
            return ErrorMsg("كلمة السر ضعيفه ")
        }
    }

    const onSubmit = async () => {
        setLoad(true)
        setLoading(true)
        validation()
            await dispatch(createNewUsers({
                name,
                email,
                password,
                phone_number,
            }))
            
        setLoading(false)
    }

    const data = useSelector(state => state.UserReducer.createUSer)

    useEffect(()=>{
        if(loading === false){
            if(data){
                localStorage.setItem('token' , data.data.token)
                localStorage.setItem('user' , JSON.stringify(data.data.user))
                success("تم تسجيل الدخول بنجاح")
            }
        }
    } , [loading])


    return [name ,email , password , phone_number,loading ,load, onChangeName , onChangeEmail , onChangePassword , onChangePhone ,onSubmit]

}

export default Register
