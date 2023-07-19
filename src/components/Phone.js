import React from 'react';
import { useState } from "react";
import {Sentiment} from "./DataPhone";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
import Dropdown from 'react-bootstrap/Dropdown';
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

const Phone = () => {
  const aspect2 = Sentiment.filter(sentiment => sentiment.titleOfAspect2 !== undefined).map((e) => {return (e.titleOfAspect2)});
  const aspect3 = Sentiment.filter(sentiment => sentiment.titleOfAspect2 !== undefined).map((item) => {return (item.titleOfAspect3)});

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
  var posYear1391=Sentiment.filter(sentiment => sentiment.year===1391 & sentiment.polarity==='مثبت').map((sentiment) => {return (sentiment)});
  var negYear1391=Sentiment.filter(sentiment => sentiment.year===1391 & sentiment.polarity==='منفی').map((sentiment) => {return (sentiment)});
  var neuYear1391=Sentiment.filter(sentiment => sentiment.year===1391 & sentiment.polarity==='خنثی').map((sentiment) => {return (sentiment)});
  var posYear1392=Sentiment.filter(sentiment => sentiment.year===1392 & sentiment.polarity==='مثبت').map((sentiment) => {return (sentiment)});
  var negYear1392=Sentiment.filter(sentiment => sentiment.year===1392 & sentiment.polarity==='منفی').map((sentiment) => {return (sentiment)});
  var neuYear1392=Sentiment.filter(sentiment => sentiment.year===1392 & sentiment.polarity==='خنثی').map((sentiment) => {return (sentiment)}); 
  var posYear1393=Sentiment.filter(sentiment => sentiment.year===1393 & sentiment.polarity==='مثبت').map((sentiment) => {return (sentiment)});
  var negYear1393=Sentiment.filter(sentiment => sentiment.year===1393 & sentiment.polarity==='منفی').map((sentiment) => {return (sentiment)});
  var neuYear1393=Sentiment.filter(sentiment => sentiment.year===1393 & sentiment.polarity==='خنثی').map((sentiment) => {return (sentiment)});  
  var posYear1396=Sentiment.filter(sentiment => sentiment.year===1396 & sentiment.polarity==='مثبت').map((sentiment) => {return (sentiment)});
  var negYear1396=Sentiment.filter(sentiment => sentiment.year===1396 & sentiment.polarity==='منفی').map((sentiment) => {return (sentiment)});
  var neuYear1396=Sentiment.filter(sentiment => sentiment.year===1396 & sentiment.polarity==='خنثی').map((sentiment) => {return (sentiment)});
  var posYear1398=Sentiment.filter(sentiment => sentiment.year===1398 & sentiment.polarity==='مثبت').map((sentiment) => {return (sentiment)});
  var negYear1398=Sentiment.filter(sentiment => sentiment.year===1398 & sentiment.polarity==='منفی').map((sentiment) => {return (sentiment)});
  var neuYear1398=Sentiment.filter(sentiment => sentiment.year===1398 & sentiment.polarity==='خنثی').map((sentiment) => {return (sentiment)});

///source
const sources = Sentiment.map(({ titleOfSource, percentSource,year,polarity, percentSentiment}) => ({ titleOfSource, percentSource,year,polarity, percentSentiment}));
//doughnut
var google=0;
var instagram=0;
var upload=0;
var twitter=0;
var tikTokComments=0;
var tikTokVideo=0;

for(var s in sources ){
  if(sources[s].titleOfSource === 'گوگل' ){
    google=google+sources[s].percentSource;
  }
  if(sources[s].titleOfSource === 'اینستاگرام' ){
    instagram=instagram+sources[s].percentSource;
}
  if(sources[s].titleOfSource === 'بارگذاری' ){
    upload=upload+sources[s].percentSource;
  }
    if(sources[s].titleOfSource === 'توییتر' ){
      twitter=twitter+sources[s].percentSource;
    }
    if(sources[s].titleOfSource === 'ویدئو تیک تاک' ){
      tikTokComments=tikTokComments+sources[s].percentSource;
  }
    if(sources[s].titleOfSource === 'نظرات تیک تاک' ){
      tikTokVideo=tikTokVideo+sources[s].percentSource;
    }
  };
////line
var sy1391=0;
var sy1392=0;
var sy1393=0;
var sy1396=0;
var sy1398=0;

for(var sy in sources ){
  if(sources[sy].year === 1391 ){
    sy1391=sy1391+sources[sy].percentSource;
  }
  if(sources[sy].year === 1392 ){
    sy1392=sy1392+sources[sy].percentSource;
}
  if(sources[sy].year === 1393 ){
    sy1393=sy1393+sources[sy].percentSource;
  }
    if(sources[sy].year === 1396 ){
      sy1396=sy1396+sources[sy].percentSource;
    }
    if(sources[sy].year === 1398 ){
      sy1398=sy1398+sources[sy].percentSource;
  }
  };
///bar
var pogoogle=0;
var poinstagram=0;
var poupload=0;
var potwitter=0;
var potikTokComments=0;
var potikTokVideo=0;
var neugoogle=0;
var neuinstagram=0;
var neuupload=0;
var neutwitter=0;
var neutikTokComments=0;
var neutikTokVideo=0;
var neggoogle=0;
var neginstagram=0;
var negupload=0;
var negtwitter=0;
var negtikTokComments=0;
var negtikTokVideo=0;

for(var s in sources ){
  if(sources[s].titleOfSource === 'گوگل'& sources[s].polarity === 'مثبت' ){
    pogoogle=pogoogle+sources[s].percentSentiment;
  }
  if(sources[s].titleOfSource === 'اینستاگرام'& sources[s].polarity === 'مثبت' ){
    poinstagram=poinstagram+sources[s].percentSentiment;
}
  if(sources[s].titleOfSource === 'بارگذاری'& sources[s].polarity === 'مثبت' ){
    poupload=poupload+sources[s].percentSentiment;
  }
    if(sources[s].titleOfSource === 'توییتر'& sources[s].polarity === 'مثبت' ){
      potwitter=potwitter+sources[s].percentSentiment;
    }
    if(sources[s].titleOfSource === 'نظرات تیک تاک'  & sources[s].polarity === 'مثبت'){
      potikTokComments=potikTokComments+sources[s].percentSentiment;
  }
    if(sources[s].titleOfSource === 'ویدئو تیک تاک'& sources[s].polarity === 'مثبت'){
      potikTokVideo=potikTokVideo+sources[s].percentSentiment;
    }
    if(sources[s].titleOfSource === 'گوگل' & sources[s].polarity === 'خنثی'){
      neugoogle=neugoogle+sources[s].percentSentiment;
    }
    if(sources[s].titleOfSource === 'اینستاگرام'& sources[s].polarity === 'خنثی' ){
      neuinstagram=neuinstagram+sources[s].percentSentiment;
  }
    if(sources[s].titleOfSource === 'بارگذاری'& sources[s].polarity === 'خنثی' ){
      neuupload=neuupload+sources[s].percentSentiment;
    }
      if(sources[s].titleOfSource === 'توییتر'& sources[s].polarity === 'خنثی' ){
        neutwitter=neutwitter+sources[s].percentSentiment;
      }
      if(sources[s].titleOfSource === 'نظرات تیک تاک' & sources[s].polarity === 'خنثی' ){
        neutikTokComments=neutikTokComments+sources[s].percentSentiment;
    }
      if(sources[s].titleOfSource === 'ویدئو تیک تاک' & sources[s].polarity === 'خنثی'){
        neutikTokVideo=neutikTokVideo+sources[s].percentSentiment;
      }
      if(sources[s].titleOfSource === 'گوگل' & sources[s].polarity === 'منفی'){
        neggoogle=neggoogle+sources[s].percentSentiment;
      }
      if(sources[s].titleOfSource === 'اینستاگرام' & sources[s].polarity === 'منفی'){
        neginstagram=neginstagram+sources[s].percentSentiment;
    }
      if(sources[s].titleOfSource === 'بارگذاری' & sources[s].polarity === 'منفی'){
        negupload=negupload+sources[s].percentSentiment;
      }
        if(sources[s].titleOfSource === 'توییتر' & sources[s].polarity === 'منفی'){
          negtwitter=negtwitter+sources[s].percentSentiment;
        }
        if(sources[s].titleOfSource === 'نظرات تیک تاک' & sources[s].polarity === 'منفی'){
          negtikTokComments=negtikTokComments+sources[s].percentSentiment;
      }
        if(sources[s].titleOfSource === 'ویدئو تیک تاک' & sources[s].polarity === 'منفی'){
          negtikTokVideo=negtikTokVideo+sources[s].percentSentiment;
        }
  };

///language
const languages = Sentiment.map(({ nameOfLanguage, percentLanguage,year,polarity,percentSentiment }) => ({ nameOfLanguage, percentLanguage,year ,polarity,percentSentiment}));
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
    english=english+languages[l].percentLanguage;
  }
  if(languages[l].nameOfLanguage === 'تایلندی ' ){
    thai=thai+languages[l].percentLanguage;
}
  if(languages[l].nameOfLanguage === 'اندونزی' ){
    indonesian=indonesian+languages[l].percentLanguage;
  }
    if(languages[l].nameOfLanguage === 'آلمانی' ){
      german=german+languages[l].percentLanguage;
    }
    if(languages[l].nameOfLanguage === 'اسپانیایی' ){
      spanish=spanish+languages[l].percentLanguage;
  }
    if(languages[l].nameOfLanguage === 'هلندی ' ){
      dutch=dutch+languages[l].percentLanguage;
    }
    if(languages[l].nameOfLanguage === 'کره ای' ){
      korean=korean+languages[l].percentLanguage;
  }
    if(languages[l].nameOfLanguage === 'پرتغالی' ){
      portuguese=portuguese+languages[l].percentLanguage;
    }
  };
///line
var ly1391=0;
var ly1392=0;
var ly1393=0;
var ly1396=0;
var ly1398=0;

for(var ly in languages ){
  if(languages[ly].year === 1391 ){
    ly1391=ly1391+languages[ly].percentLanguage;
  }
  if(languages[ly].year === 1392 ){
    ly1392=ly1392+languages[ly].percentLanguage;
}
  if(languages[ly].year === 1393 ){
    ly1393=ly1393+languages[ly].percentLanguage;
  }
    if(languages[ly].year === 1396 ){
      ly1396=ly1396+languages[ly].percentLanguage;
    }
    if(languages[ly].year === 1398 ){
      ly1398=ly1398+languages[ly].percentLanguage;
  }
  };
///bar
var poenglish=0;
var pothai=0;
var poindonesian=0;
var pogerman=0;
var pospanish=0;
var podutch=0;
var pokorean=0;
var poportuguese=0;
var neuenglish=0;
var neuthai=0;
var neuindonesian=0;
var neugerman=0;
var neuspanish=0;
var neudutch=0;
var neukorean=0;
var neuportuguese=0;
var negenglish=0;
var negthai=0;
var negindonesian=0;
var neggerman=0;
var negspanish=0;
var negdutch=0;
var negkorean=0;
var negportuguese=0;

for(var l in languages ){
  if(languages[l].nameOfLanguage === 'انگلیسی' & languages[l].polarity === 'مثبت'){
    poenglish=poenglish+languages[l].percentSentiment;
  }
  if(languages[l].nameOfLanguage === 'تایلندی ' & languages[l].polarity === 'مثبت'){
    pothai=pothai+languages[l].percentSentiment;
}
  if(languages[l].nameOfLanguage === 'اندونزی' & languages[l].polarity === 'مثبت'){
    poindonesian=poindonesian+languages[l].percentSentiment;
  }
    if(languages[l].nameOfLanguage === 'آلمانی' & languages[l].polarity === 'مثبت'){
      pogerman=pogerman+languages[l].percentSentiment;
    }
    if(languages[l].nameOfLanguage === 'اسپانیایی' & languages[l].polarity === 'مثبت'){
      pospanish=pospanish+languages[l].percentSentiment;
  }
    if(languages[l].nameOfLanguage === 'هلندی ' & languages[l].polarity === 'مثبت'){
      podutch=podutch+languages[l].percentSentiment;
    }
    if(languages[l].nameOfLanguage === 'کره ای' & languages[l].polarity === 'مثبت'){
      pokorean=pokorean+languages[l].percentSentiment;
  }
    if(languages[l].nameOfLanguage === 'پرتغالی' & languages[l].polarity === 'مثبت'){
      poportuguese=poportuguese+languages[l].percentSentiment;
    }
    if(languages[l].nameOfLanguage === 'انگلیسی' & languages[l].polarity === 'خنثی'){
      neuenglish=neuenglish+languages[l].percentSentiment;
    }
    if(languages[l].nameOfLanguage === 'تایلندی ' & languages[l].polarity === 'خنثی'){
      neuthai=neuthai+languages[l].percentSentiment;
  }
    if(languages[l].nameOfLanguage === 'اندونزی' & languages[l].polarity === 'خنثی'){
      neuindonesian=neuindonesian+languages[l].percentSentiment;
    }
      if(languages[l].nameOfLanguage === 'آلمانی' & languages[l].polarity === 'خنثی'){
        neugerman=neugerman+languages[l].percentSentiment;
      }
      if(languages[l].nameOfLanguage === 'اسپانیایی' & languages[l].polarity === 'خنثی'){
        neuspanish=neuspanish+languages[l].percentSentiment;
    }
      if(languages[l].nameOfLanguage === 'هلندی ' & languages[l].polarity === 'خنثی'){
        neudutch=neudutch+languages[l].percentSentiment;
      }
      if(languages[l].nameOfLanguage === 'کره ای' & languages[l].polarity === 'خنثی'){
       neukorean=neukorean+languages[l].percentSentiment;
    }
      if(languages[l].nameOfLanguage === 'پرتغالی' & languages[l].polarity === 'خنثی'){
        neuportuguese=neuportuguese+languages[l].percentSentiment;
      }
      if(languages[l].nameOfLanguage === 'انگلیسی' & languages[l].polarity === 'منفی' ){
        negenglish=negenglish+languages[l].percentSentiment;
      }
      if(languages[l].nameOfLanguage === 'تایلندی ' & languages[l].polarity === 'منفی' ){
        negthai=negthai+languages[l].percentSentiment;
    }
      if(languages[l].nameOfLanguage === 'اندونزی' & languages[l].polarity === 'منفی' ){
        negindonesian=negindonesian+languages[l].percentSentiment;
      }
        if(languages[l].nameOfLanguage === 'آلمانی' & languages[l].polarity === 'منفی' ){
          neggerman=neggerman+languages[l].percentSentiment;
        }
        if(languages[l].nameOfLanguage === 'اسپانیایی' & languages[l].polarity === 'منفی' ){
          negspanish=negspanish+languages[l].percentSentiment;
      }
        if(languages[l].nameOfLanguage === 'هلندی ' & languages[l].polarity === 'منفی' ){
          negdutch=negdutch+languages[l].percentSentiment;
        }
        if(languages[l].nameOfLanguage === 'کره ای' & languages[l].polarity === 'منفی' ){
          negkorean=negkorean+languages[l].percentSentiment;
      }
        if(languages[l].nameOfLanguage === 'پرتغالی' & languages[l].polarity === 'منفی' ){
          negportuguese=negportuguese+languages[l].percentSentiment;
        }
  };


          const [userSourceOfSentiment, setUserSourceOfSentiment] = useState({
            labels: [1391,1392,1393,1396,1398],
            datasets: [
              {
                label: "نتایج",
                data: [sy1391,sy1392,sy1393,sy1396,sy1398],
                pointRadius: 5,
                backgroundColor: [
                  'rgba(255, 26, 104)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                  'rgba(75, 192, 192)',
                  'rgba(153, 102, 255)',
                  'rgba(255, 159, 64)',
                ],
                borderColor: "black",
                borderWidth: 1,
              
              },],});


              const [userLanguageOfSentiment, setUserLanguageOfSentiment] = useState({
                labels: ['انگلیسی','تایلندی ' ,'اندونزی','آلمانی','اسپانیایی' ,'هلندی ','کره ای','پرتغالی'],
                datasets: [{
                  label: ' نتایج',
              data: [poenglish,pothai,poindonesian,pogerman,pospanish,podutch,pokorean,poportuguese],
                 backgroundColor: [
                    'rgba(54, 150, 20, 1)',
                 ],
                   borderColor: "white",
                   borderWidth: 1,
               },
           {
              label: ' نتایج',
              data: [neuenglish,neuthai,neuindonesian,neugerman,neuspanish,neudutch,neukorean,neuportuguese],
               backgroundColor: [
                   'rgba(54, 162, 235, 1)',
               ],
               borderColor: "white",
                   borderWidth: 1,          
                 },
                 {
                   label: ' نتایج',
                   data: [negenglish,negthai,negindonesian,neggerman,negspanish,negdutch,negkorean,negportuguese],
                   backgroundColor: [
                     'rgba(310, 30, 20, 1)',
                   ],
                   borderColor: "white",
                       borderWidth: 1,              
                  },],});
                  
                  const [userYear, setUserYear] = useState({
                    labels:['مثبت','خنثی','منفی'],
                    datasets: [
                      {
                        label: " درصد زبان ها",
                        data: [positive,neutral,negative],
                        pointRadius: 5,
                        backgroundColor: [
                          'rgba(54, 150, 20, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(310, 30, 20, 1)',
                        ],
                        borderColor: "gray",
                        borderWidth: 1,     
                      },],});

          const [userYearOfSentiment, setUserYearOfSentiment] = useState({
            labels: [1391,1392,1393,1396,1398],
            datasets: [{
               label: ' نتایج',
           data: [posYear1391.length,posYear1392.length,posYear1393.length,posYear1396.length,posYear1398.length],
              backgroundColor: [
                 'rgba(54, 150, 20, 1)',
              ],
                borderColor: "white",
                borderWidth: 1,
            },
        {
           label: ' نتایج',
           data: [neuYear1391.length,neuYear1392.length,neuYear1393.length,neuYear1396.length,neuYear1398.length],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: "white",
                borderWidth: 1,          
              },
              {
                label: ' نتایج',
                data: [negYear1391.length,negYear1392.length,negYear1393.length,negYear1396.length,negYear1398.length],
                backgroundColor: [
                  'rgba(310, 30, 20, 1)',
                ],
                borderColor: "white",
                    borderWidth: 1,          
                  },],});

          const [userLanguage, setUserLanguage] = useState({
            labels: ['انگلیسی','تایلندی ' ,'اندونزی','آلمانی','اسپانیایی' ,'هلندی ','کره ای','پرتغالی'],
              datasets: [
                {
                  label: " درصد زبان ها",
                  data: [english, thai, indonesian, german, spanish, dutch, korean, portuguese],
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
                  labels: [1391,1392,1393,1396,1398],
                    datasets: [
                      {
                        label: " درصد زبان ها",
                        data: [ly1391,ly1392,ly1393,ly1396,ly1398],
                        pointRadius: 5,
                        backgroundColor: [
                          "#038baa",
                          "#928807",
                          "#2b5403",
                          "#590b56",
                        ],
                        borderColor: "black",
                        borderWidth: 1,
                      },],});


                      const [userSourceSentiment, setUserSourceSentiment] = useState({
                        labels:  ['گوگل','اینستاگرام','بارگذاری','توییتر','نظرات تیک تاک','ویدئو تیک تاک'],
                        datasets: [{
                          label: ' نتایج',
                      data: [pogoogle,poinstagram,poupload,potwitter,potikTokComments,potikTokVideo],
                         backgroundColor: [
                            'rgba(54, 150, 20, 1)',
                         ],
                           borderColor: "white",
                           borderWidth: 1,
                       },
                   {
                      label: ' نتایج',
                      data: [neugoogle,neuinstagram,neuupload,neutwitter,neutikTokComments,neutikTokVideo],
                       backgroundColor: [
                           'rgba(54, 162, 235, 1)',
                       ],
                       borderColor: "white",
                           borderWidth: 1,          
                         },
                         {
                           label: ' نتایج',
                           data: [neggoogle,neginstagram,negupload,negtwitter,negtikTokComments,negtikTokVideo],
                           backgroundColor: [
                             'rgba(310, 30, 20, 1)',
                           ],
                           borderColor: "white",
                               borderWidth: 1,    
                          },],});

      
              const [userSource, setUserSource] = useState({
                labels: ['گوگل','اینستاگرام','بارگذاری','توییتر','نظرات تیک تاک','ویدئو تیک تاک'],
                datasets: [
                  {
                    label: "درصد منابع",
                    data: [google,instagram,upload,twitter,tikTokComments,tikTokVideo],
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
        overlay={(props) => (<Tooltip {...props}> نمایش حجم احساسات در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-3 question bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
        </div> 
         <div className='col-1 mt-4'>
          <h4 className='text-dark'>5,500</h4>  
         <p className='text-muted'>کل</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-success'>9,454</h4>  
         <p className='text-muted'>مثبت</p>    
        </div>                    
        <div className='col-1 mt-4'>
          <h4 className='text-info'>2,007</h4>  
         <p className='text-muted'>خنثی</p>    
        </div> 
        <div className='col-2 mt-4'>
          <h4 className='text-danger'>6,032</h4>  
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
                display: true,
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
        overlay={(props) => (<Tooltip {...props}> توزیع احساسات در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
</div> 

<div className='mt-5' style={{ width: 600,height:300 }}>
<Bar data={userYearOfSentiment}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          display: false
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
        overlay={(props) => (<Tooltip {...props}> درصد کل داده ها برای
          هر طبقه بندی احساسات</Tooltip>)}
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
          <h2 className='text-dark textPart2'>{Sentiment.length+aspect2.length+aspect3.length}</h2> 
          <p className='text-muted text2Part2'>جنبه های مختلف</p>   
        </div>
        <div className='col-5 ml-2 mt-3 border bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" fill="currentColor" className="bi bi-command svgPart2" viewBox="0 0 16 16">
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z"/>
        </svg>
          <h2 className='text-dark textPart2'>{Sentiment.length}</h2> 
          <p className='text-muted text2Part2'> منابع مختلف</p>   
        </div>
        </div> 
        </div>
         </div>



        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>منابع (حجم)</h4>   <OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> کل آیتم داده در هر منبع </Tooltip>)}
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
          <div style={{ width: 500,height:300  }}>
    <Bar data={userSourceSentiment}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          display: false
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
        overlay={(props) => (<Tooltip {...props}> حجم کل داده ها
          بر اساس منبع در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>
          </div>
          <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <Line  data={userSourceOfSentiment} />
    </div>
        </div>  


        <div className='row d-flex justify-content-around'>
          <div className='col-5 bg-white border mt-4'>
            <div className='d-flex text-secondary'>
          <h4 className='px-3 mt-4'>زبان ها (حجم)</h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
        overlay={(props) => (<Tooltip {...props}> کل آیتم داده در هر زبان </Tooltip>)}
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
          <h4 className='mt-4 lan'>زبان ها (احساسات) </h4><OverlayTrigger delay={{ hide: 450, show: 300 }}
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
          <Bar data={userLanguageOfSentiment}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          display: false
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
        overlay={(props) => (<Tooltip {...props}> حجم کل داده ها
          بر اساس زبان در طول زمان</Tooltip>)}
        placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-4 question  bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg></OverlayTrigger>  
          </div>
          <div className='px-5' style={{ width: 1000,height:430,marginRight:100 }}>
      <Line data={userLanguageSentiment} />
    </div>
        </div>  

    </div>
);
};

export default Phone;