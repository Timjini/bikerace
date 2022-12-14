import React from 'react';
import notFound from '../assets/404.jpg';

function ErrorPage() {
  return (

    <div className='errorPage'>
        <img src={notFound}
        className='notFound img-fluid' alt='thank you'
        />
        <h1 className='text-center thankYouTitle'> Looks like you are lost !</h1>
                  <a
                    href="/"
                    className="inline-block rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800"
                  >
                    Go Back
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
    
    </div>

  )
}

export default ErrorPage