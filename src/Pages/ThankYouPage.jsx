import React from 'react'

function ThankYouPage() {
  return (

    <div className='thank-you-page'>
        <img src='https://images.unsplash.com/photo-1515164084382-4ac60f929e06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
        className='' alt='thank you'
        />
        <h1 className='text-center p-5 thankYouTitle'> Thank you for participating.</h1>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="/bikers"
                    className="inline-block rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800"
                  >
                    See The Bikers
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/"
                    className="inline-block rounded-lg bg-gray-200 px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-gray-300"
                  >
                    Main Page
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
    
    </div>

  )
}

export default ThankYouPage