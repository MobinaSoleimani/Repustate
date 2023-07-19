import React, {useState,useEffect}  from 'react';
import {Link} from 'react-router-dom';
import { validate } from './Validate';
import logosign from './logo.jpg';
import '../App.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const Signin = () => {


    const [data,setData]=useState({
        email:"",
        password:"",
        });
        
        const[errors,setErrors]=useState({})
        const[touched,setTouched]=useState({})
        
        useEffect(()=>{
          setErrors(validate(data,"login"))
        console.log(data.password);
      },[data,touched])
        
        const changeHandler=(event)=>{         
             setData({ ...data,[event.target.name] :event.target.value})        
        console.log(data.password);
      }
             console.log(data.password);
        
        
        const focusHandler=(event)=>{
          setTouched({...touched,[event.target.name]:true})
        }
        
        const submitHandler =(event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
        }
        else{
              setTouched({
                email:true,
                password:true,
                });
        }}

    return (
        <div className='mainSignin repustate'>
            <form onSubmit={submitHandler}> 
            <div className='d-flex justify-content-center flex-column align-items-center p-5'>
            <img className='logosign' src={logosign} alt='logosign' />
            <input className='signinInput rounded' type="Email" name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler} placeholder=" ایمیل"/>
            {errors.email&& touched.email && <span className='text-warning'>{errors.email}</span>}
            <input className='signinInput rounded'  type="password" name="password"  value={data.password} onChange={changeHandler} onFocus={focusHandler} placeholder="  کلمه عبور"></input>
            {errors.password&& touched.password && <span className='text-warning'>{errors.password}</span>}
            <button type='submit' className="signinButton">ورود</button>
            <Link className="text-white text-decoration-none py-3" to='/Signup'>ثبت نام نکردید؟</Link>
            </div>
            </form>
        </div>
    );
};

export default Signin;