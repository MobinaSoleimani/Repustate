import React, {useState,useEffect,useRef}  from 'react';
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
        });
        
        const[errors,setErrors]=useState({})
        const[touched,setTouched]=useState({})
        
        useEffect(()=>{
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
                });
        }}
        const handleSignIn=()=>{
          if(email.current.value==localEmail&&password.current.value==localPassword){
              localStorage.setItem("signUp",email.current.value)            
          }
         }
    return (
      <div className='mainSignin repustate'>
      <form > 
      <div className='d-flex justify-content-center flex-column align-items-center p-5'>
      <img className='logosign' src={logosign} alt='logosign' />
      {/* <h6 className="text-white">کاربر گرامی  {localPassword}  لطفا  </h6>
      <h6 className="text-white">کاربر گرامی  {localEmail}  لطفا  </h6> */}
      <h6 className="text-white"> ایمیل و رمزعبور خود را وارد کنید</h6>
      <input className='signinInput rounded' type="Email" ref={email} name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler} placeholder=" ایمیل"/>
      {errors.email&& touched.email && <span className='text-warning'>{errors.email}</span>}
      <input className='signinInput rounded' ref={password} type="password" name="password"  value={data.password} onChange={changeHandler} onFocus={focusHandler} placeholder="  رمز عبور"></input>
      {errors.password&& touched.password && <span className='text-warning'>{errors.password}</span>}
      <Link className="link" to='/*'> <button type='submit' onClick={handleSignIn} className="signinButton"><Link className="link" to='/*'>ورود</Link></button></Link>
      <Link className="text-white text-decoration-none py-3" to='/Signup'>ثبت نام نکردید؟</Link>
      </div>
      </form>
  </div> 
      
    );
};

export default Signin;