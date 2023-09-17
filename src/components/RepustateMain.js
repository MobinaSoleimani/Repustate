import React ,{useRef,useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import logo from './logo.jpg';
import Filter from './Filter';
import Overview from './Overview';
import Videos from './Videos';
import SentimentScore from './SentimentScore';
import Keywords from './Keywords';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
import Phone from './Phone';
import HeadPhone from './HeadPhone';
import TV from './TV';
import Laptop from './Laptop';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>



const RepustateMain = () => {

  // const localName=localStorage.getItem("name")
  // console.log()
    const [dropdownText, setDropdownText] = useState("انتخاب محصول");
  
    const handleDropdownSelect = (eventKey) => {
      setDropdownText(eventKey);
    };


    return (
        <div className='repustate' style={{marginRight:"2px"}}>
             <header className="border row mx-1">
             <div className='col-2 p-3 border-top-0 border-dark'>
             <img className='logo' src={logo} /></div>
             <div className='col-10 text-secondary border'>
             <h5 className='project'>+ پروژه</h5>
             </div>
             </header>
             <main style={{marginLeft:"3px",marginRight:"4px"}}  className="border row">
             <div className='col-2 px-4 py-4 d-flex justify-content-between'>              
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
            <h5 style={{color:"#c1c4cb"}}>پروژه ها</h5>

             </div>

             <div className='col-10 bg-light border'>
             <div className='d-flex justify-content-between mt-5'>
             <div >
             <h4>نسخه ی نمایشی تجربه مشتری</h4>
             <p>آخرین به روزرسانی: 1402/4/27, 11:53:45 </p>
            </div>
            <div className='d-flex'>
           
            <Filter/>

            <div style={{marginLeft:'25px'}}><input style={{width:'500px',height:'40px'}} className='select' type="text" placeholder="  جست و جوی نسخه ی نمایشی تجربه مشتری ..."/></div>
            <div className='bg-light text-muted h-50 px-2 border '>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="15" fill="currentColor" className="bi bi-search searching" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
            </div>
            </div>
             </div>
                
             <div>
             <nav className="navbar navbar-expand-lg navbar-white bg-white border mb-2">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto px-2">
                <li className="nav-item active">
                    <Link className="nav-link list" to='/Overview'> مرور کلی</Link>
                </li>
                <li className="nav-item active px-3">
                   <Link className="nav-link list" to='/Videos'>ویدئوها</Link>
                </li><li className="nav-item active px-3">
                    <Link className="nav-link list " to='/SentimentScore'>امتیاز احساسات</Link>
                </li><li className="nav-item active px-3">
                    <Link className="nav-link list " to='/Keywords'>کلمات کلیدی و کیفیت نظرات</Link>
                </li><li className="nav-item active px-3">
                    <a className="nav-link list " href="#">جنبه ها </a>
                </li><li className="nav-item active px-4 text-secondary mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-text  text-secondary" viewBox="0 0 16 16">
  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>
                </li><li className="nav-item active px-3 text-secondary mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud  text-secondary" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/></svg>
                </li>
                <li className="nav-item active px-3">
            <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <button className='border-0 bg-white px-4' data-bs-toggle="dropdown" aria-expanded="false">{dropdownText} </button>
         </Dropdown.Toggle>

      <Dropdown.Menu className='w-25'>
      <Dropdown.Item eventKey="موبایل" > <Link to='/Phone' className='link'>موبایل</Link></Dropdown.Item>
      <Dropdown.Item eventKey="لپ تاپ" >  <Link to='/Laptop' className='link'>لپ تاپ</Link></Dropdown.Item>
      <Dropdown.Item eventKey="هدفون" > <Link to='/HeadPhone' className='link'>هدفون</Link></Dropdown.Item>
      <Dropdown.Item eventKey="تلویزیون" ><Link to='/TV' className='link'>تلویزیون</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </li>
                <li className="nav-item active px-5">
                  <button className='btn btn-light border-secondary'><Link to='/Home' className='link'>خانه</Link></button>
                </li>
    </ul>
  </div>
</nav>
             </div>
            
             <div>
          <Routes>
            <Route path='/Overview' element={<Overview/>} />
            <Route path='/Videos' element={<Videos/>} />
            <Route path='/Keywords' element={<Keywords/>} />
            <Route path='/SentimentScore' element={<SentimentScore/>} />
            <Route path='/Phone' element={<Phone/>} />
            <Route path='/HeadPhone' element={<HeadPhone/>} />
            <Route path='/Laptop' element={<Laptop/>} />
            <Route path='/TV' element={<TV/>} />
          </Routes>
       </div>
             </div>
             </main> 

             <div className="fixed-bottom p-4 w-100" style={{background: "linear-gradient(to top right, #051c31, #2c6699)"}}>
            <button type="button" className='btn py-2 px-4 rounded text-white last'>آزمایش رایگان خود را شروع کنید</button>
             </div>
        </div>
    );
};

export default RepustateMain;