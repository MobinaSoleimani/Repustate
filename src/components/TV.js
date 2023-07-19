import React from 'react';
import { useState } from "react";
import BarChart from "./BarChart";
import { Language,SentimentOfYear,Sentiment,Source, Aspect } from "./DataTV";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const TV = () => {

  const {source} = Sentiment[3];
  const {language} = Sentiment[4];
  const {years} = Sentiment[5];
  const sentiment1 = Sentiment.filter(sentiment => sentiment.id < 4).map((sentiment) => {return (sentiment)});

          const [userSourceOfSentiment, setUserSourceOfSentiment] = useState({
            labels: source.map((data) => data.year),
            datasets: [
              {
                label: "نتایج",
                data: source.map((data) => data.percentSource),
                backgroundColor: [
                  "#4b9207",
                  "#2b5403",
                  "#038baa",
                  "#4bc0c0",
                  "#d9534f",
                ],
                borderColor: "black",
                borderWidth: 1,
              
              },],});


              const [userLanguageOfSentiment, setUserLanguageOfSentiment] = useState({
                labels: language.map((data) => data.year),
                datasets: [
                  {
                    label: "نتایج",
                    data: language.map((data) => data.percentLanguage),
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "#d9534f",
                      "#4b9207",
                      "#2b5403",
                      "#038baa",
                    ],
                    borderColor: "black",
                    borderWidth: 1,
                  
                  },],});



          const [userYearOfSentiment, setUserYearOfSentiment] = useState({
            labels: years.map((data) => data.year),
            datasets: [
              {
                label: "نتایج",
                data: years.map((data) => data.results),
                backgroundColor: [
                  "#5bc0de",
                  "#d9534f",
                  "#03C04A",
                  "#5bc0de",
                ],
                borderColor: "black",
                borderWidth: 1,
              
              },],});

          const [userLanguage, setUserLanguage] = useState({
            labels: Language.map((data) => data.name),
              datasets: [
                {
                  label: " درصد زبان ها",
                  data: Language.map((data) => data.percentLanguage),
                  backgroundColor: [
                    "#88341e",
                    "#704717",
                    "#927d07",
                    "#4b9207",
                    "#2b5403",
                    "#038baa",
                  ],
                  borderColor: "white",
                  borderWidth: 1,
                },],});

                const [userLanguageSentiment, setUserLanguageSentiment] = useState({
                  labels: Language.map((data) => data.name),
                    datasets: [
                      {
                        label: " درصد زبان ها",
                        data: language.map((data) => data.percentLanguage),
                        backgroundColor: [
                          "#88341e",
                          "#704717",
                          "#927d07",
                          "#4b9207",
                          "#2b5403",
                          "#038baa",
                        ],
                        borderColor: "white",
                        borderWidth: 1,
                      },],});


                      const [userSourceSentiment, setUserSourceSentiment] = useState({
                        labels: Source.map((data) => data.title),
                        datasets: [
                          {
                            label: "درصد منابع",
                            data: source.map((data) => data.percentSource),
                            backgroundColor: [
                              "#038baa",
                              "#8D870C",
                              "#387E4A",
                              "#383A7E",
                              "#52387E",
                            ],
                            borderColor: "white",
                            borderWidth: 1,
                          },],});

      
              const [userSource, setUserSource] = useState({
                labels: Source.map((data) => data.title),
                datasets: [
                  {
                    label: "درصد منابع",
                    data: Source.map((data) => data.percentSource),
                    backgroundColor: [
                      "#A1231B",
                      "#8D870C",
                      "#387E4A",
                      "#038baa",
                      "#52387E",
                    ],
                    borderColor: "white",
                    borderWidth: 1,
                  },],});
    
                  const [userSentiment, setUserSentiment] = useState({
                    labels: sentiment1.map((data) => data.sentiment),
                    datasets: [
                      {
                        label: "درصد احساسات",
                        data: sentiment1.map((data) => data.percentSentiment),
                        backgroundColor: [
                          "#03C04A",
                          "#d9534f",
                          "#5bc0de",
                        ],
                        borderColor: "white",
                        borderWidth: 1,
                      },],});

    return (
        <div className='repustate' style={{marginBottom:'100px'}}>
            
        <div className='bg-white border'>
         <div className='d-flex row'>
         <div className='d-flex mt-4 text-secondary col-6'>
        <h4 className='px-3'>روند احساسات</h4>
<OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> نمایش حجم احساسات در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-3 question bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
        </div> 
         <div className='col-1 mt-4'>
          <h4 className='text-dark'>10,690</h4>  
         <p className='text-muted'>کل</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-success'>3,321</h4>  
         <p className='text-muted'>مثبت</p>    
        </div>                    
        <div className='col-1 mt-4'>
          <h4 className='text-info'>2,007</h4>  
         <p className='text-muted'>خنثی</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-danger'>5,022</h4>  
         <p className='text-muted'>منفی</p>    
        </div> 
        </div>
      
        <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <LineChart chartData={userYearOfSentiment} />
    </div>
         </div>

         <div className='mt-4 part2'>
         <div className='d-flex justify-content-around row'>
         <div className='col-6 bg-white border'> 
         <div className='d-flex mt-4 text-secondary'>
         <h4 className='px-3 mt-4'>روند توزیع احساسات</h4>       
         <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> توزیع احساسات در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
</div> 

<div className='mt-5' style={{ width: 600,height:300 }}>
    <BarChart chartData={userYearOfSentiment} />
  </div>
            </div> 
        <div className='d-flex justify-content-around mt-4 col-5 row'>
            <div className='col-12 border bg-white '>
            <div className='d-flex text-secondary'>
            <h4 className='px-3 mt-4'>احساسات کلی</h4>      
           <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> درصد کل داده ها برای
          هر طبقه بندی احساسات</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
    </div>   
    <div  className='d' style={{ width: 300 }}>
    <DoughnutChart chartData={userSentiment} />
  </div>
        </div>   
          <div className='col-5 mr-3 mt-3 border bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" fill="currentColor" className="bi bi-hash svgPart2 " viewBox="0 0 16 16">
        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
        </svg>
          <h2 className='text-dark textPart2'>{Aspect.length}</h2> 
          <p className='text-muted text2Part2'>جنبه های مختلف</p>   
        </div>
        <div className='col-5 ml-2 mt-3 border bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" fill="currentColor" className="bi bi-command svgPart2" viewBox="0 0 16 16">
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z"/>
        </svg>
          <h2 className='text-dark textPart2'>{Source.length}</h2> 
          <p className='text-muted text2Part2'> منابع مختلف</p>   
        </div>
        </div> 
        </div>
         </div>



        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>منابع (حجم)</h4>       
          <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> کل آیتم داده در هر منبع </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div className='d' style={{ width: 300 }}>
    <DoughnutChart chartData={userSource} />
  </div>
          </div>
          
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>منابع (احساسات)</h4>       
          <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> تفکیک احساسات برای هر منبع </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>

            <h6 className='mt-4 drop'>تعداد منابع</h6>
            <Dropdown className='border mt-3 h-25 drop'>
  <Dropdown.Toggle variant="muted" id="dropdown-basic">
    5
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">5</Dropdown.Item>
    <Dropdown.Item href="#/action-2">10</Dropdown.Item>
    <Dropdown.Item href="#/action-3">15</Dropdown.Item>
    <Dropdown.Item href="#/action-4">20</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </div>
          <div style={{ width: 400 }}>
    <BarChart chartData={userSourceSentiment} />
  </div>
          </div>
        </div>


      <div className='bg-white border mt-4'>
        <div className='mt-2 text-secondary d-flex'>
          <h4 className='px-3 mt-4'>روند منابع  </h4> 
        <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم کل داده ها
          بر اساس منبع در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>

          </div>
          <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <LineChart chartData={userSourceOfSentiment} />
    </div>
        </div>  


        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>زبان ها (حجم)</h4>       
          <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> کل آیتم داده در هر زبان </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div  className='d' style={{ width: 310 }}>
    <DoughnutChart chartData={userLanguage} />
  </div>
          </div>
          
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='mt-4 lan'>زبان ها (احساسات) </h4>       
          <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> تفکیک احساسات برای هر زبان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
<h6 className='mt-4 drop'>تعداد زبان ها</h6>
            <Dropdown className='border mt-3 h-25 drop'>
  <Dropdown.Toggle variant="muted" id="dropdown-basic">
    5
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">5</Dropdown.Item>
    <Dropdown.Item href="#/action-2">10</Dropdown.Item>
    <Dropdown.Item href="#/action-3">15</Dropdown.Item>
    <Dropdown.Item href="#/action-4">20</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </div>
          <div >
    <BarChart chartData={userLanguageSentiment} />
  </div>
          </div>
        </div>


      <div className='bg-white border mt-4'>
        <div className='mt-2 text-secondary d-flex'>
          <h4 className='px-3 mt-4'>روند زبان ها</h4>       
          <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم کل داده ها
          بر اساس زبان در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <LineChart chartData={userLanguageOfSentiment} />
    </div>
        </div>  
    </div>
);
};

export default TV;