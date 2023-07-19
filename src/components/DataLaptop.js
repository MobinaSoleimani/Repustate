export const Language= [
    {
      id: 1,
      name:'انگلیسی',
      percentLanguage: 4,
    },
    {
      id: 2,
      name:'تایلندی ',
      percentLanguage: 18.9,
    },
    {
      id: 3,
      name:'اندونزی',
      percentLanguage: 20.5,
    },
    {
      id: 4,
      name:'ناشناخته',
      percentLanguage: 6.1,
    },
    {
      id: 5,
      name:'آلمانی',
      percentLanguage: 8.9,
    },
    {
      id: 6,
      name:'اسپانیایی',
      percentLanguage: 80.5,
    },
    {
      id: 7,
      name:'اسپانیایی',
      percentLanguage: 10,
    },
    {
      id: 8,
      name:'هلندی ',
      percentLanguage: 21,
    },
    {
      id: 9,
      name:'کره ای',
      percentLanguage: 70,
    },
    {
      id: 10,
      name:'پرتغالی',
      percentLanguage: 11,
    },
  ];


  export const Sentiment = [
    {
      id: 1,
      sentiment:'مثبت',
      percentSentiment: 40,
      text:' عالی بود',
    },
    {
      id: 2,
      sentiment:'منفی',
      percentSentiment: 10,
      text:' بد بود',
    },
    {
      id: 3,
      sentiment:'خنثی',
      percentSentiment:50,
      text:'ویدئو قشنگی بود',
    },
    {
      id: 4,
      source:[
        {
          id:1,
        percentSource: 701,
         year: 1390,
          month:1,
          day:22,
        },
        {
          percentSource: 302,
          year: 1391,
          month:10,
          day:7,
        },
        {
          id:2,
          percentSource: 500,
          year: 1392,
          month:12,
          day:18,
        },
        {
          id:3,
          percentSource: 900,
          year: 1393,
          month:9,
          day:22,
        },
        {
          id:4,
          percentSource: 500,
          year: 1390,
          month:3,
          day:25,
        },
    ],
    },
    {
      id: 5,
      language:[
      {
        id:1,
          year: 1390,
          month:4,
          day:2,
      percentLanguage: 901,
      },
      {
        id:2,
          year: 1390,
          month:2,
          day:18,
        percentLanguage: 500,
      },
      {
        id:3,
          year: 1391,
          month:6,
          day:12,
        percentLanguage: 200,
      },
      {
        id:4,
          year: 1392,
          month:5,
          day:5,
        percentLanguage: 1000,
      },
      {
        id:5,
          year: 1392,
          month:7,
          day:6,
        percentLanguage: 760,
      },
      {
        id:6,
          year: 1393,
          month:1,
          day:22,
        percentLanguage: 102,
      },
      {
        id:7,
          year: 1394,
          month:11,
          day:11,
        percentLanguage: 500,
      },
      {
        id:8,
          year: 1394,
          month:9,
          day:8,
        percentLanguage: 200,
      },
      {
        id:9,
          year: 1395,
          month:3,
          day:6,
        percentLanguage: 100,
      },
      {
        id:10,
        year: 1395,
        month:11,
        day:19,
      percentLanguage: 702,
    },
      ],   
    },
    {
      id: 6,
      years:[
        {
          id: 1,
          year: 1390,
          month:11,
          day:22,
          results: 300,
        },
        {
          id: 2,
          year: 1390,
          month:7,
          day:15,
          results: 528,
        },
        {
          id: 3,
          year: 1392,
          month:7,
          day:16,
          results: 180
        },
        {
          id: 4,
          year: 1396,
          month:11,
          day:11,
          results: 414,
        },
        {
          id: 5,
          year: 1396,
          month:1,
          day:7,
          results: 700,
        },
        {
          id: 6,
          year: 1397,
          month:5,
          day:6,
          results: 60,
        },
        {
          id: 7,
          year: 1397,
          month:11,
          day:14,
          results: 50
        },
        {
          id: 8,
          year: 1398,
          month:12,
          day:24,
          results: 910,
        },
        {
          id: 9,
          year: 1398,
          month:3,
          day:23,
          results: 140,
        },
        {
          id: 10,
          year: 1399,
          month:5,
          day:4,
          results: 40,
        },
        {
          id: 11,
          year: 1399,
          month:5,
          day:23,
          results: 260,
        },
        {
          id: 12,
          year: 1400,
          month:7,
          day:4,
          results: 39,
        },
      ]
    },
  ];

  export const Source = [
    {
      id: 1,
      title:'گوگل',
      percentSource: 2,
    },
    {
      id: 2,
      title:'بارگذاری',
      percentSource: 17.7,
    },
    {
      id: 3,
      title:'نظرات تیک تاک',
      percentSource: 18.5,
    },
    {
      id: 4,   
      title:'توییتر',
      percentSource: 14.7,
    },
    {
      id: 5,
      title:'ویدئو تیک تاک',
      percentSource: 9.7,
    },
  ];

  export const Product = [
    {
      id: 1,
      title:'موبایل',
    },
    {
      id: 2,
      title:'لپ تاپ',
    },
    {
      id: 3,
      title:'هدفون',
    },
    {
      id: 4,   
      title:'تلوزیون',
    },
  ];

  export const Aspect = [
    {
      id: 1,
      title:' برند',
    },
    {
      id: 2,
      title:' اندازه صفحه نمایش',
    },
    {
      id: 3,
      title:'حافظه رم',
    },
    {
      id: 4,   
      title:' نسل پردازنده',
    },
    {
      id: 5,
      title:'تعداد پورت ها ',
    },
    {
      id: 6,
      title:'عمر باتری',
    },
    {
      id: 7,
      title:' وزن',
    },
  ];
  
  export const ProductAspect = [
    {
      idP: 1,
      idA: 1,
    },
    {
      idP: 2,
      idA: 2,
    },
    {
      idP: 3,
      idA: 3,
    },
    {  
      idA: 4,
    },
    {
      idA: 5,
    },
    {  
      idA: 6,
    },
  ];
  
  export const LanguageSentiment = [
    {
      idL: 1,
      idS: 1,
    },
    {
      idL: 2,
      idS: 2,
    },
    {
      idL: 3,
      idS: 3,
    },
    {
      idL: 4,   
      idS: 4,
    },
    {
      idL: 5,
      idS: 5,
    },
  ];
   
  export const ProductAspectSentiment = [
    {
      idA: 1,
      idS: 1,
      idP: 1,
    },
    {
      idA: 2,
      idS: 2,
      idP: 2,
    },
    {
      idA: 3,
      idS: 3,
      idP: 3,
    },
    {
      idA: 4,   
      idS: 4,
      idP: 4,
    },
    {
      idA: 5,
      idS: 5,
    },
    {  
      idA: 6,
    },
  ];
  