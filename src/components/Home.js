import React from "react";
import logo from './logo.jpg';
import {Link} from 'react-router-dom';
import '../App.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function Home(){

    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
         <div className="container repustate">
         <div className="home">
            <img className='logoHome' src={logo} alt='logo' />
         <div className="homeMain">
            <h4 className="mt-5 mb-5 fw-bolder">  {localStorage.getItem('name')}  کاربر گرامی خوش آمدید.</h4>
            <div><Link to='/*'><button className="mt-5 fw-bolder px-5 py-2 btn btn-outline-primary">ورود به نسخه ی نمایشی</button></Link></div>
            <button onClick={logout} className="logout px-4">ثبت نام کردید؟</button>
            <button onClick={deleteAccount} className="delete px-3">خروج از حساب کاربری</button>
        </div>
        </div>
        </div>
    );
}
export default Home;