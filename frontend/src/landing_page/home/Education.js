import React from 'react';
function Education() {
    return (  
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/images/education.svg' style={{width:'70%'}} alt='image'></img>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                <p >Varsity, the largest online stock market education book in the world<br/>
                Covering everything from the basucs to advanced trading.</p>
           <a href='' className='mb-8'>Versity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
           
           <p className='mt-5'>Trading Q&A, the most active trading and investment community  in <br/>
           india for all ypur market related queries.</p>

           <a href=''>Trading Q&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
       </div>
    );
}

export default Education;