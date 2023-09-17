import React from 'react';
import { useState } from "react";
import {Sentiment} from "./DataTV";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';import
{ Bar,Line,Doughnut } from "react-chartjs-2";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const TV = () => {
  const aspect1 = Sentiment.filter(sentiment => sentiment.titleOfAspect2 !== undefined).map((e) => {return (e.titleOfAspect1)});
  const aspect2 = Sentiment.filter(sentiment => sentiment.titleOfAspect2 !== undefined).map((e) => {return (e.titleOfAspect2)});
  const aspect3 = Sentiment.filter(sentiment => sentiment.titleOfAspect2 !== undefined).map((e) => {return (e.titleOfAspect3)});
  const unique = arr => [...new Set(arr)];
  const merge12 = aspect1.concat(aspect2);
  const merge123 = merge12.concat(aspect3);
  const merges = merge123.filter(function (element) {return element !== undefined});

  const tOfS = Sentiment.map((titleOfSource) => {return (titleOfSource.titleOfSource)});

  const polarities = Sentiment.map((polarities) => {return (polarities.polarity)});
  var positive=0;
  var negative=0;
  var neutral=0;

  for(var x in polarities ){
    if(polarities[x] === 'مثبت' ){
      positive++;
    }
    if(polarities[x] === 'منفی' ){
      negative++;
  }
    if(polarities[x] === 'خنثی' ){
      neutral++;
    }
  }


  const quality = Sentiment.map(({year,polarity}) => ({year,polarity}));

  function sortArrayByKeyName(array) {
    return array.sort((a, b) => {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];
      
      if (keyA < keyB) {
        return -1;
      }   
      if (keyA > keyB) {
        return 1;
      } 
      return 0;
    });
  }
  
  const countKey = (key) => {
    return arrYearSentiment.reduce((count, obj) => {
      return obj[key] ? count + 1 : count;
    }, 0);
  }

    const checkPropertyExist= (arr,prop) =>{
    for (i = 0; i < arr.length; i++){
    if(arr[i].hasOwnProperty(prop)){
          return true;
    } }
    return false;
  };

  var arrYearSentiment = [],arrYearSentimentFilter = [],obj, obj2,i;
    for (i = 0; i < quality.length; i++){
    obj = {};
      obj[quality[i].polarity+'Year'+quality[i].year] =1;
      arrYearSentiment.push(obj);
};

arrYearSentiment.map((item) => {
    Object.keys(item).map((key) => {
    obj2 = {};
    var c = countKey(key);
    obj2[key] =c;
    var haskey = checkPropertyExist(arrYearSentimentFilter,key);
    if(haskey === false){
     arrYearSentimentFilter.push(obj2);
    }
  });});
  const sortedArrYearSentoment = sortArrayByKeyName(arrYearSentimentFilter);  
 
   var posYear = [],negYear = [],neuYear = [];
    sortedArrYearSentoment.map((obj) => {
       Object.entries(obj).map(([key, value]) => {

        if(key.startsWith("مثبت") ){
          posYear.push(value);
        }
        if(key.startsWith("منفی") ){
          negYear.push(value);
      }
        if(key.startsWith("خنثی")){
          neuYear.push(value);
        }                   
    });
    });

///source
const sources = Sentiment.map(({ titleOfSource,year,polarity }) => ({ titleOfSource ,year,polarity}));
//doughnut
var google=0;
var instagram=0;
var upload=0;
var twitter=0;
var tikTokComments=0;
var tikTokVideo=0;

for(var s in sources ){
  if(sources[s].titleOfSource === 'گوگل' ){
    google++;
  }
  if(sources[s].titleOfSource === 'اینستاگرام' ){
    instagram++;
}
  if(sources[s].titleOfSource === 'بارگذاری' ){
    upload++;
  }
    if(sources[s].titleOfSource === 'توییتر' ){
      twitter++;
    }
    if(sources[s].titleOfSource === 'ویدئو تیک تاک' ){
      tikTokComments++;
  }
    if(sources[s].titleOfSource === 'نظرات تیک تاک' ){
      tikTokVideo++;
    }
  };
////line

const countKey1 = (key) => {
  return arrSourceYear.reduce((count, obj) => {
    return obj[key] ? count + 1 : count;
  }, 0);
}

var arrSourceYear = [],arrSourceYearFilter = [],obj1, obj3,i3;
for (i3 = 0; i3 < sources.length; i3++){
obj1 = {};
  obj1[sources[i3].titleOfSource+'Year'+sources[i3].year] =1;
  arrSourceYear.push(obj1);
};

arrSourceYear.map((item) => {
Object.keys(item).map((key) => {
obj3 = {};
var c = countKey1(key);
obj3[key] =c;
var haskey = checkPropertyExist(arrSourceYearFilter,key);
if(haskey === false){
 arrSourceYearFilter.push(obj3);
}
});});
const sortedArrSourceYear = sortArrayByKeyName(arrSourceYearFilter); 
var goYear = [],inYear = [], upYear = [],twYear = [],viYear = [],coYear = [];
sortedArrSourceYear.map((obj) => {
   Object.entries(obj).map(([key, value]) => {

    if(key.startsWith( 'گوگل' ) ){
      goYear.push(value);
    }
    if(key.startsWith('اینستاگرام') ){
      inYear.push(value);
  }
    if(key.startsWith( 'بارگذاری')){
      upYear.push(value);
    } 
    if(key.startsWith( 'توییتر' ) ){
      twYear.push(value);
  }
    if(key.startsWith('ویدئو تیک تاک')){
      viYear.push(value);
    }           
    if(key.startsWith('نظرات تیک تاک'  )){
      coYear.push(value);
    }     
});
});


///bar
  
const countKey2 = (key) => {
  return arrSourceSentiment.reduce((count, obj) => {
    return obj[key] ? count + 1 : count;
  }, 0);
}

var arrSourceSentiment = [],arrSourceSentimentFilter = [],obj4, obj5,i2;
for (i2 = 0; i2 < sources.length; i2++){
obj4 = {};
  obj4[sources[i2].polarity+'Source'+sources[i2].titleOfSource] =1;
  arrSourceSentiment.push(obj4);
};

arrSourceSentiment.map((item) => {
Object.keys(item).map((key) => {
obj5 = {};
var c = countKey2(key);
obj5[key] =c;
var haskey = checkPropertyExist(arrSourceSentimentFilter,key);
if(haskey === false){
  arrSourceSentimentFilter.push(obj5);
}
});});
const sortedArrSourceSentiment = sortArrayByKeyName(arrSourceSentimentFilter);  
var posSource = [],neuSource = [], negSource = [];
sortedArrSourceSentiment.map((obj) => {
   Object.entries(obj).map(([key, value]) => {

    if(key.startsWith( 'مثبت' ) ){
      posSource.push(value);
    }
    if(key.startsWith('خنثی' ) ){
      neuSource.push(value);
  }
    if(key.startsWith( 'منفی')){
      negSource.push(value);
    } 
});});

///language
const languages = Sentiment.map(({ nameOfLanguage,year,polarity }) => ({ nameOfLanguage,year,polarity}));
//doughnut
var english=0;
var thai=0;
var indonesian=0;
var german=0;
var spanish=0;
var dutch=0;
var korean=0;
var portuguese=0;

for(var l in languages ){
  if(languages[l].nameOfLanguage === 'انگلیسی' ){
    english++;
  }
  if(languages[l].nameOfLanguage === 'تایلندی' ){
    thai++;
}
  if(languages[l].nameOfLanguage === 'اندونزی' ){
    indonesian++;
  }
    if(languages[l].nameOfLanguage === 'آلمانی' ){
      german++;
    }
    if(languages[l].nameOfLanguage === 'اسپانیایی' ){
      spanish++;
  }
    if(languages[l].nameOfLanguage === 'هلندی' ){
      dutch++;
    }
    if(languages[l].nameOfLanguage === 'کره ای' ){
      korean++;
  }
    if(languages[l].nameOfLanguage === 'پرتغالی' ){
      portuguese++;
    }
  };
///line
  const countKey5 = (key) => {
    return arrLanguageYear.reduce((count, obj) => {
      return obj[key] ? count + 1 : count;
    }, 0);
  }
  
  var arrLanguageYear = [],arrLanguageYearFilter = [],obj6, obj7,i7;
  for (i7 = 0; i7 < languages.length; i7++){
  obj6 = {};
    obj6[languages[i7].nameOfLanguage+'Year'+languages[i7].year] =1;
    arrLanguageYear.push(obj6);
  };
  
  arrLanguageYear.map((item) => {
  Object.keys(item).map((key) => {
  obj7 = {};
  var c = countKey5(key);
  obj7[key] =c;
  var haskey = checkPropertyExist(arrLanguageYearFilter,key);
  if(haskey === false){
   arrLanguageYearFilter.push(obj7);
  }
  });});
  const sortedArrLanguageYear = sortArrayByKeyName(arrLanguageYearFilter);  
  var enYear = [],thYear = [], inYear = [],geYear = [],spYear = [],duYear = [],koYear = [],poYear = [];
  sortedArrLanguageYear.map((obj) => {
     Object.entries(obj).map(([key, value]) => {
  
      if(key.startsWith('انگلیسی') ){
        enYear.push(value);
      }
    if(key.startsWith( 'تایلندی') ){
      thYear.push(value);
    }
    if(key.startsWith('اندونزی') ){
      inYear.push(value);
  }
      if(key.startsWith('آلمانی')){
        geYear.push(value);
      } 
      if(key.startsWith('اسپانیایی') ){
        spYear.push(value);
    }
      if(key.startsWith('هلندی')){
        duYear.push(value);
      }           
      if(key.startsWith('کره ای')){
        koYear.push(value);
      }     
      if(key.startsWith('پرتغالی' )){
        poYear.push(value);
      }  
  });
  });
///bar

  const countKey3 = (key) => {
    return arrLanguageSentiment.reduce((count, obj) => {
      return obj[key] ? count + 1 : count;
    }, 0);
  }
  
  var arrLanguageSentiment = [],arrLanguageSentimentFilter = [],obj8, obj9,i4;
  for (i4 = 0; i4 < languages.length; i4++){
  obj8 = {};
    obj8[languages[i4].polarity+'Language'+languages[i4].nameOfLanguage] =1;
    arrLanguageSentiment.push(obj8);
  };
  
  arrLanguageSentiment.map((item) => {
  Object.keys(item).map((key) => {
  obj9 = {};
  var c = countKey3(key);
  obj9[key] =c;
  var haskey = checkPropertyExist(arrLanguageSentimentFilter,key);
  if(haskey === false){
    arrLanguageSentimentFilter.push(obj9);
  }
  });});
  const sortedArrLanguageSentiment = sortArrayByKeyName(arrLanguageSentimentFilter);  
  var posLanguage = [],neuLanguage = [], negLanguage = [];
  sortedArrLanguageSentiment.map((obj) => {
     Object.entries(obj).map(([key, value]) => {
      if(key.startsWith( 'مثبت' ) ){
        posLanguage.push(value);
      }
      if(key.startsWith('خنثی' ) ){
        neuLanguage.push(value);
    }
      if(key.startsWith( 'منفی')){
        negLanguage.push(value);
      } 
  });});
  
  
    const [userSourceOfSentiment, setUserSourceOfSentiment] = useState({
      labels: unique(sources.map((item) =>(item.year)).sort()),
      datasets: [
        {
          label: " اینستاگرام",
          data: inYear,
          pointRadius: 5,
          backgroundColor: [
            "#038baa",   
          ],
          borderColor: "blue",
          borderWidth: 1,
        },
        {
          label: "بارگذاری",
          data:upYear,
          pointRadius: 5,
          backgroundColor: [
            "#B76E79",
          ],
          borderColor: "pink",
          borderWidth: 1,
        },
        {
          label: "توییتر",
          data: twYear,
          pointRadius: 5,
          backgroundColor: [
            "#FF0000",
          ],
          borderColor: "red",
          borderWidth: 1,
        },
        {
          label: " نظرات تیک تاک",
          data: coYear,
          pointRadius: 5,
          backgroundColor: [
            "#eeeeee",  
          ],
          borderColor: "gray",
          borderWidth: 1,
        },
        {
          label: " ویدئوهای تیک تاک",
          data: viYear,
          pointRadius: 5,
          backgroundColor: [
            "#FFFF00",
          ],
          borderColor: "yellow",
          borderWidth: 1,
        },
        {
          label: "گوگل",
          data: goYear,
          pointRadius: 5,
          backgroundColor: [
            "#000000",
          ],
          borderColor: "black",
          borderWidth: 1,
        }
        ,],});




              const [userLanguageOfSentiment, setUserLanguageOfSentiment] = useState({
                labels: unique(languages.map((item) =>(item.nameOfLanguage)).sort()),
                datasets: [{
                  label: 'خنثی',
              data: neuLanguage,
                 backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                 ],
                   borderColor: "white",
                   borderWidth: 1,
               },
           {
              label: 'مثبت',
              data: posLanguage ,
               backgroundColor: [
                'rgba(54, 150, 20, 1)',
               ],
               borderColor: "white",
                   borderWidth: 1,          
                 },
                 {
                   label: ' منفی',
                   data: negLanguage,
                   backgroundColor: [
                     'rgba(310, 30, 20, 1)',
                   ],
                   borderColor: "white",
                       borderWidth: 1,              
                  },],});
                  
                  const [userYear, setUserYear] = useState({
                    labels:unique(quality.map((item) =>(item.polarity)).sort()),
                    datasets: [
                      {
                        label: "  زبان ها",
                        data: [neutral,positive,negative],
                        pointRadius: 5,
                        backgroundColor: [
                          'rgba(54, 162, 235, 1)',
                          'rgba(54, 150, 20, 1)',
                            'rgba(310, 30, 20, 1)',
                        ],
                        borderColor: "gray",
                        borderWidth: 1,     
                      },],});

          const [userYearOfSentiment, setUserYearOfSentiment] = useState({
            labels: unique(quality.map((item) =>(item.year)).sort()),
            datasets: [{
               label: 'خنثی',
             data:neuYear,
              backgroundColor: [
                'rgba(54, 162, 235, 1)',
              ],
                borderColor: "white",
                borderWidth: 1,
            },
        {
           label: ' مثبت',
           data: posYear,
            backgroundColor: [
              'rgba(54, 150, 20, 1)',
            ],
            borderColor: "white",
                borderWidth: 1,          
              },
              {
                label: ' منفی',
                data: negYear,
                backgroundColor: [
                  'rgba(310, 30, 20, 1)',
                ],
                borderColor: "white",
                    borderWidth: 1,          
                  },],});

          const [userLanguage, setUserLanguage] = useState({
            labels: unique(languages.map((item) =>(item.nameOfLanguage)).sort()),
              datasets: [
                {
                  label: "  زبان ها",
                  data: [german,spanish, indonesian,english, thai, dutch, portuguese, korean],
                  backgroundColor: [
                    'rgba(255, 225, 5,1)',
                    'rgba(75, 200, 192, 1)',
                    "#2b5403",
                    'rgba(153, 111, 111, 0.7)',
                    'rgba(153, 102, 2, 1)',
                    "#038baa",
                    "#704d47",
                    'rgba(18, 205, 95, 1)',
                  ],
                  borderColor: "white",
                  borderWidth: 1,
                },],});

                const [userLanguageSentiment, setUserLanguageSentiment] = useState({
                  labels: unique(languages.map((item) =>(item.year)).sort()),
                    datasets: [
                      {
                        label: "آلمانی ",
                        data:geYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#038baa",   
                        ],
                        borderColor: "blue",
                        borderWidth: 1,
                      },
                      {
                        label: "اسپانیایی ",
                        data:spYear ,
                        pointRadius: 5,
                        backgroundColor: [
                          "#FFD700",    
                        ],
                        borderColor: "yellow",
                        borderWidth: 1,
                      },
                      {
                        label: " اندونزی",
                        data: inYear ,
                        pointRadius: 5,
                        backgroundColor: [
                          "#FFA500",
                        ],
                        borderColor: "orange",
                        borderWidth: 1,
                      },
                      {
                        label: " انگلیسی",
                        data: enYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#B76E79",
                        ],
                        borderColor: "pink",
                        borderWidth: 1,
                      },
                      {
                        label: "تایلندی ",
                        data: thYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#FF0000",
                        ],
                        borderColor: "red",
                        borderWidth: 1,
                      },
                      {
                        label: "  هلندی ",
                        data: duYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#eeeeee",  
                        ],
                        borderColor: "gray",
                        borderWidth: 1,
                      },
                      {
                        label: "  کره ای ",
                        data: koYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#15d63f",
                        ],
                        borderColor: "green",
                        borderWidth: 1,
                      },
                      {
                        label: "   پرتغالی",
                        data: poYear,
                        pointRadius: 5,
                        backgroundColor: [
                          "#000000",
                        ],
                        borderColor: "black",
                        borderWidth: 1,
                      }
                      ,],});


                      const [userSourceSentiment, setUserSourceSentiment] = useState({
                        labels:  unique(sources.map((item) =>(item.titleOfSource)).sort()),
                        datasets: [{
                          label: ' خنثی',
                      data: neuSource,
                         backgroundColor: [
                          'rgba(54, 162, 235, 1)',
                         ],
                           borderColor: "white",
                           borderWidth: 1,
                       },
                   {
                      label: 'مثبت ',
                      data:posSource,
                       backgroundColor: [
                        'rgba(54, 150, 20, 1)',
                      
                       ],
                       borderColor: "white",
                           borderWidth: 1,          
                         },
                         {
                           label: ' منفی',
                           data: negSource,
                           backgroundColor: [
                             'rgba(310, 30, 20, 1)',
                           ],
                           borderColor: "white",
                               borderWidth: 1,    
                          },],});

      
              const [userSource, setUserSource] = useState({
                labels: unique(sources.map((item) =>(item.titleOfSource)).sort()),
                datasets: [
                  {
                    label: " منابع",
                    data: [instagram,upload,twitter,tikTokComments,tikTokVideo,google],
                    backgroundColor: [
                      "#A1231B",
                      "#387E4A",
                      "#d2385e",
                      "#038baa",
                      "#52387E",
                      "#8D870C",
                    ],
                    borderColor: "white",
                    borderWidth: 1,
                  },],});
  

    return (
        <div className='repustate' style={{marginBottom:'100px'}}>
            
        <div className='bg-white border'>
         <div className='d-flex row'>
         <div className='d-flex mt-4 text-secondary col-6'>
        <h4 className='px-3'>روند احساسات</h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> نمایش تعداد احساسات در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-3 question bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
        </div> 
         <div className='col-1 mt-4'>
          <h4 className='text-dark'>{positive+neutral+negative}</h4>  
         <p className='text-muted'>کل</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-success'>{positive}</h4>  
         <p className='text-muted'>مثبت</p>    
        </div>                    
        <div className='col-1 mt-4'>
          <h4 className='text-info'>{neutral}</h4>  
         <p className='text-muted'>خنثی</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-danger'>{negative}</h4>  
         <p className='text-muted'>منفی</p>    
        </div> 
        </div>
        <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <Line data={userYear}
           options={{
            plugins: {
              title: {
                display: true,
              },
              legend: {
                display: false,
            },
            responsive: true,
          }}}
      />
    </div>
         </div>

         <div className='mt-4 part2'>
         <div className='d-flex justify-content-around row'>
         <div className='col-6 bg-white border'> 
         <div className='d-flex mt-4 text-secondary'>
         <h4 className='px-3 mt-4'>روند توزیع احساسات</h4> <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> توزیع احساسات مثبت ، خنثی و منفی در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
</div> 

<div className='mt-5' style={{ width: 600,height:400 }}>
<Bar data={userYearOfSentiment}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: false,
            boxWidth: 31
          }
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }}
    />
  </div>
            </div> 
        <div className='d-flex justify-content-around mt-4 col-5 row'>
            <div className='col-12 border bg-white '>
            <div className='d-flex text-secondary'>
            <h4 className='px-3 mt-4'>احساسات کلی</h4> <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> درصد احساسات مثبت ، خنثی و منفی </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>     
    </div>   
    <div  className='d' style={{ width: 300 }}>
    <Doughnut data={userYear}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 6
          }
        }
      },
      responsive: true,
    }}
    />
  </div>
        </div>   
          <div className='col-5 mr-3 mt-3 border bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" fill="currentColor" className="bi bi-hash svgPart2 " viewBox="0 0 16 16">
        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
        </svg>
          <h2 className='text-dark textPart2'>{ unique(merges).length}</h2> 
          <p className='text-muted text2Part2'>جنبه های مختلف</p>   
        </div>
        <div className='col-5 ml-2 mt-3 border bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" fill="currentColor" className="bi bi-command svgPart2" viewBox="0 0 16 16">
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z"/>
        </svg>
          <h2 className='text-dark textPart2'>{unique(tOfS).length}</h2> 
          <p className='text-muted text2Part2'> منابع مختلف</p>   
        </div>
        </div> 
        </div>
         </div>



        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>منابع (حجم)</h4>   <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم نظرات  در هر منبع </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div className='d' style={{ width: 300 }}>
    <Doughnut data={userSource} 
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 6
          }
        }
      },
      responsive: true,
    }}/>
  </div>
          </div>
          
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>منابع (احساس)</h4> <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> تفکیک احساسات برای هر منبع </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>

          </div>
          <div style={{ width: 510,height:300  }}>
    <Bar data={userSourceSentiment}
     options={{
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: false,
            boxWidth: 20
          }
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }}
    />
  </div>
          </div>
        </div>


      <div className='bg-white border mt-4'>
        <div className='mt-2 text-secondary d-flex'>
          <h4 className='px-3 mt-4'> روند منابع </h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم کل  نظرات
          بر اساس منبع در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <Line  data={userSourceOfSentiment}
         options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              // display: false,
          },
          responsive: true,
        }}}
      />
    </div>
        </div>  


        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>زبان ها (حجم)</h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم نظرات در هر زبان </Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div  className='d' style={{ width: 310 }}>
    <Doughnut data={userLanguage}
         options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 6
          }
        }
      },
      responsive: true,
    }}/> 
  </div>
          </div>
          
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='mt-4 lan'>زبان ها (احساس) </h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> تفکیک احساسات برای هر زبان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>

          </div>
          <div style={{ width: 500,height:300}}>
          <Bar data={userLanguageOfSentiment}
      options={{
        plugins: {
          title: {
            display: true,
          },
          legend: {
            labels: {
              usePointStyle: false,
              boxWidth: 20
            }
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }}
    />
  </div>
          </div>
        </div>


      <div className='bg-white border mt-4'>
        <div className='mt-2 text-secondary d-flex'>
          <h4 className='px-3 mt-4'>روند زبان ها</h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> حجم کل  نظرات
          بر اساس زبان در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>  
          </div>
          <div className='px-5 mb-4' style={{ width: 1000,height:430,marginRight:100 }}>
      <Line data={userLanguageSentiment}
            options={{
              plugins: {
                title: {
                  display: true,
                },
                legend: {
                  // display: false,
              },
              responsive: true,
            }}}
      />
    </div>
        </div>  

    </div>
);
}

export default TV;