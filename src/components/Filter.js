import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const Filter = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='repustate'>
      <button className='bg-secondary text-light h-50 w-75 px-3 border rounded' onClick={handleShow}>
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="currentColor" className="bi bi-funnel filters" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/></svg>
            </button>
      <Modal size="lg" className='px-5' show={show} onHide={handleClose}>
        <Modal.Header style={{background:"#333a54"}} className='text-white' closeButton>
          <Modal.Title>فیلتر کردن داده ها</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='repustate'>
                {/* 1 */}
                <div className='row mt-3'>
            <div  className='col-6'>
            <p className='text-muted'>از</p>
        <input style={{width:'350px',height:'40px' ,paddingLeft:'10px'}} className="select" type="text" placeholder="09/09/1390"/>
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg></span>
            </div>
            <div className='col-6'>
            <p className='text-muted'>تا</p>
        <input style={{width:'350px',height:'40px' ,paddingLeft:"10px"}} className="select" type="text" placeholder="27/4/1402 "/>
        <span className='icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg></span>
            </div>
          </div>
                {/* 2 */}
        <div className='row mt-3'>
        <div className='col-4'>
            <p className='text-muted'>زبان ها</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='scroll'>
      <Dropdown.Item href="#/action-1">انگلیسی</Dropdown.Item>
        <Dropdown.Item href="#/action-2">عربی (العربية)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">چینی (中文)</Dropdown.Item>
        <Dropdown.Item href="#/action-4">دانمارکی (Dansk)</Dropdown.Item>
        <Dropdown.Item href="#/action-5">هلندی (Nederlands)</Dropdown.Item>
        <Dropdown.Item href="#/action-6">فرانسوی (Français)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div  className='col-4'>
                <p className='text-muted'>منابع</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
      <Dropdown.Item href="#/action-1">  گوگل</Dropdown.Item>
        <Dropdown.Item href="#/action-2">نظرات تیک تاک</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ویدئوی تیک تاک</Dropdown.Item>
        <Dropdown.Item href="#/action-4">توییتر</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div  className='col-4'>
                <p className='text-muted'>کیفیت نظر</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
        <Dropdown.Item href="#/action-1">بالا</Dropdown.Item>
        <Dropdown.Item href="#/action-2">متوسط</Dropdown.Item>
        <Dropdown.Item href="#/action-3">پایین</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                {/* 3 */}
          <div className='row mt-3'>
            <div className='col-12'>
                <p className='text-muted'>جنبه ها</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='scroll'>
      <Dropdown.Item href="#/action-1"> برند</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> ابعاد</Dropdown.Item>
        <Dropdown.Item href="#/action-3">عمر باتری</Dropdown.Item>
        <Dropdown.Item href="#/action-4"> حافظه رم</Dropdown.Item>
        <Dropdown.Item href="#/action-5"> جنس</Dropdown.Item>
        <Dropdown.Item href="#/action-6">وضوح تصویر</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                {/* 4 */}
          <div className='row mt-3'>
            <div  className='col-6'>
                <p className='text-muted'>دسته بندی</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-25'>
      <Dropdown.Item href="#/action-1">آژانس مسافرتی</Dropdown.Item>
      <Dropdown.Item href="#/action-2"> رستوران ها</Dropdown.Item> 
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className='col-6'>
                <p className='text-muted'>رتبه بندی</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='scroll'>
      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        <Dropdown.Item href="#/action-4">4</Dropdown.Item>
        <Dropdown.Item href="#/action-5">5</Dropdown.Item>
        <Dropdown.Item href="#/action-6">6</Dropdown.Item>
        <Dropdown.Item href="#/action-7">7</Dropdown.Item>
        <Dropdown.Item href="#/action-8">8</Dropdown.Item>
        <Dropdown.Item href="#/action-9">9</Dropdown.Item>
        <Dropdown.Item href="#/action-10">10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                {/* 5 */}
          <div className='row mt-3'>
            <div  className='col-6'>
                <p className='text-muted'>زیرنوع</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{width:"240px"}}>
        <Dropdown.Item href="#/action-1">
        رستوران صبحانه،رستوران برانچ،<br/> 
        رستوران ناهار، رستوران وگان،<br/> 
        رستوران گیاهی</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className='col-6'>
                <p className='text-muted'>نوع</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='w-50'>
        <Dropdown.Item href="#/action-1">صبحانه رستوران</Dropdown.Item>
        <Dropdown.Item href="#/action-2">آژانس مسافرتی</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                {/* 6 */}
          <div className='row mt-3'>
            <div  className='col-6'>
                <p className='text-muted'>هنرمند</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='scroll'>
      <Dropdown.Item href="#/action-1">Azuline</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ballchon x Earth Yamamoto</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Boy Sompob</Dropdown.Item>
        <Dropdown.Item href="#/action-4">CLBCelebrityclinic</Dropdown.Item>
        <Dropdown.Item href="#/action-5">GZxJonaz</Dropdown.Item>
        <Dropdown.Item href="#/action-6">La'Nae Bae</Dropdown.Item>
        <Dropdown.Item href="#/action-7">PSY</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className='col-6'>
                <p className='text-muted'>نظرات</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='scroll'>
      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">10</Dropdown.Item>
        <Dropdown.Item href="#/action-4">14</Dropdown.Item>
        <Dropdown.Item href="#/action-5">21</Dropdown.Item>
        <Dropdown.Item href="#/action-6">21</Dropdown.Item>
        <Dropdown.Item href="#/action-7">26</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                    {/* 7 */}
          <div className='row mt-3'>
          <div  className='col-6'>
                <p className='text-muted'>بازدید</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-25'>
        <Dropdown.Item href="#/action-1">2210610</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className='col-6'>
                <p className='text-muted'>پسند ها</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='scroll'>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        <Dropdown.Item href="#/action-4">4</Dropdown.Item>
        <Dropdown.Item href="#/action-5">5</Dropdown.Item>
        <Dropdown.Item href="#/action-6">6</Dropdown.Item>
        <Dropdown.Item href="#/action-7">7</Dropdown.Item>
        <Dropdown.Item href="#/action-8">8</Dropdown.Item>
        <Dropdown.Item href="#/action-9">9</Dropdown.Item>
        <Dropdown.Item href="#/action-10">10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
                    {/* 8 */}
          <div className='row mt-3'>
            <div  className='col-6'>
                <p className='text-muted'>اشتراک ها</p>
            <Dropdown>
      <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
      </Dropdown.Toggle>
      <Dropdown.Menu className='scroll'>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">27</Dropdown.Item>
        <Dropdown.Item href="#/action-3">56</Dropdown.Item>
        <Dropdown.Item href="#/action-4">59</Dropdown.Item>
        <Dropdown.Item href="#/action-5">131</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className='col-6'>
                <p className='text-muted'>آهنگ</p>
            <Dropdown>
            <Dropdown.Toggle variant="muted" className='border' id="dropdown-basic">
        <input style={{width:'200px',height:'30px',border:"none"}} className="select" type="text" placeholder="انتخاب... "/>
         </Dropdown.Toggle>

      <Dropdown.Menu className='scroll'>
        <Dropdown.Item href="#/action-1">Everything จิงเกอเบล </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pretty and fun Marimba song</Dropdown.Item>
        <Dropdown.Item href="#/action-3">She Share Story (for Vlog)</Dropdown.Item>
        <Dropdown.Item href="#/action-4">That That (prod. & feat)</Dropdown.Item>
        <Dropdown.Item href="#/action-5">original sound</Dropdown.Item>
        <Dropdown.Item href="#/action-6">original sound-MKMABI</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>


        </div>



        </Modal.Body>

        <Modal.Footer>
        <Button className='px-4 py-2 apply last'  onClick={handleClose}>اعمال فیلترها</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default Filter;