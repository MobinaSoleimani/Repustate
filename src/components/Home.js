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
            <div><img className='logoHome' src={logo} alt='logo' /></div>
           <h1 className="mt-4  w-50">تجزیه و تحلیل احساسات   مشتریان و کارمندان از نظرسنجی‌ها و رسانه‌های اجتماعی  </h1>
         <div className="homeMain">
            <Link to='/Signup'><button className="bHome">ثبت نام </button></Link>
            <Link to='/Signin'><button className="bHome">ورود </button></Link>
            <button onClick={deleteAccount} className="delete px-3">خروج از حساب کاربری</button>
        </div>
        </div>
        </div>
    );
}
export default Home;