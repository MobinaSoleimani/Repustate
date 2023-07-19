import React from 'react';
import data from './Data1.json';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const Validate = () => {
    return (
        <div>
           <div >
            { 
               data.map(items => { return(
                    <div className='mt-5 px-5' key={items.id}>
                  <div className='d-flex flex-row justify-content-start flex-wrap mt-5'> 
                  <h2 className='text-danger fw-bolder mt-5'>{items.title}</h2>
                 {
                     items.source.map(dataSource => { return(
                        <div key={dataSource.id}>
                        <div className='py-3 px-4'> 
                        <h5 >{dataSource.id}</h5>
                        <h4 className='text-success'>{dataSource.title}</h4>
                        <br/>

                        </div>
                    </div> )}) 
                 }
                        <br/>
                                  {
                     items.sentiment.map(dataSentiment => { return(
                        <div key={dataSentiment.id}>
                        <div className='py-3 px-4'> 
                        <h5 >{dataSentiment.id}</h5>
                        <h4 className='text-success'>{dataSentiment.sentiment}</h4>
                        <h4 className='text-primary'>{dataSentiment.text}</h4>
                        <br/>
                        </div>
                    </div> )}) 
                 }
                        <br/>
                   
                                  {
                     items.language.map(dataLanguage => { return(
                        <div key={dataLanguage.id}>
                        <div className='py-3 px-4'> 
                        <h5 >{dataLanguage.id}</h5>
                         <h4 className='text-success'>{dataLanguage.name}</h4>
                        <br/>

                        </div>
                    </div> )}) 
                 }
                        <br/>
                                  {
                     items.aspect.map(dataAspect => { return(
                        <div className='mb-5' key={dataAspect.id}>
                        <div className='py-3 px-4'> 
                        <h5 >{dataAspect.id}</h5>
                          <h4 className='text-success'>{dataAspect.title}</h4>
                        <br/>

                        </div>
                    </div> )}) 
                 }
                        <br/>
                  </div>
                    </div>
                    )}) 
            }
        </div>      
        </div>
    );
};

export default Validate;
