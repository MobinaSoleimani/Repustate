import React, { useEffect, useRef, useState } from "react";
import RepustateMain from './RepustateMain';
import {Link} from 'react-router-dom';
import { validate } from './Validate';
import '../App.css';
import logosign from './logo.jpg';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function Login(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")     
  
    const [data,setData]=useState({
        email:"",
        password:"",
        name:"",
        confirmPassword:"",
        });
        
        const[errors,setErrors]=useState({})
        const[touched,setTouched]=useState({})
        
        useEffect(()=>{
          if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
        }

          setErrors(validate(data,"login"))
        },[data,touched])
        
        const changeHandler=(event)=>{
             setData({ ...data,[event.target.name] :event.target.value})                     
        }
        
        const focusHandler=(event)=>{
          setTouched({...touched,[event.target.name]:true})
        }
        
        const submitHandler =(event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
        console.log(data)
        }
        else{
              setTouched({
                email:true,
                password:true,
                name:true,
                confirmPassword:true,
                });
        }}
        
        const handleClick=()=>{

          if(name.current.value&&email.current.value&&password.current.value)
         {
           localStorage.setItem("name",name.current.value)
           localStorage.setItem("email",email.current.value)
           localStorage.setItem("password",password.current.value)
           localStorage.setItem("signUp",email.current.value)
         }
      }
   return(
    <div>
        {showHome?<RepustateMain/>:
        (
            <div className=' w-100 repustate d-flex'>  
             <div className='w-50 mt-5 '>
             <h3 className='p-5 fw-bold'> آیا می دانستید که می توانید در هر زبانی با استفاده از هوش مصنوعی، قوانین احساسات سفارشی ایجاد کنید؟</h3>
             <img src='https://www.repustate.com/static/images/svgs/regirst-bg.svg'/>
             </div>                 
             <form > 
            <div className='form mainLogin text-white d-flex justify-content-center flex-column align-items-center' >
             <Link to='/Home' className='headLoginR'>بازگشت<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
             </svg></Link>       
             <img className='px-3 headLoginL' src={logosign}/>
             <h2 className='py-2 mt-5'>ثبت نام</h2> 
             <input className='signinInput w-75 rounded mt-5' ref={email}  type="Email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} placeholder="  ایمیل   " />
             {errors.email&& touched.email && <span className='text-warning'>{errors.email}</span>}

             <input className='signinInput w-75 rounded' type="name" ref={name} name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} placeholder="  نام کاربری" ></input>
             {errors.name&& touched.name && <span className='text-warning' >{errors.name}</span>}

             <input className='signinInput w-75 rounded' type="password" ref={password} name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} placeholder="  رمز عبور"></input>
             {errors.password&& touched.password && <span className='text-warning'>{errors.password}</span>}

             <input className='signinInput w-75 rounded' type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} placeholder="  تایید رمز عبور"/>
             {errors.confirmPassword && touched.confirmPassword && <span className='text-warning'>{errors.confirmPassword}</span>}
           
             <Link className="link" to='/*'><button type='submit' onClick={handleClick} className="loginButton rounded"> <Link className="link" to='/*'>ثبت نام </Link></button></Link>
             <p className='mt-2 pLogin'> کلیه حقوق شرکت رایاصدر محفوظ است.</p>
             </div>
             </form>
            </div>)
        }
    </div>
);
}
export default Login;
