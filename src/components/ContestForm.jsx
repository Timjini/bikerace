import React,{useState, useEffect} from 'react';
import axios from 'axios';

function ContestForm() {


    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')
    const [error, setError] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (slogan.length > 50) {
            setError('Slogan must be 50 characters or less')
        } else {
            setError('')
        }
        if (email.length > 0 && slogan.length > 0) {
            axios.post('https://fierce-badlands-13020.herokuapp.com/api/v1/contests', {
                email: email,
                slogan: slogan,
                first_name: 'first_name',
                last_name: 'last_name'
            })
                .then(res => {
                    console.log(res)
                    history.push('/thank-you')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }




  return (

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>
    <div>
        <label htmlFor="text" className="sr-only">First Name</label>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Your First Name"
            onChange={(e) => setFirst_name(e.target.value)}
          />

        </div>
      </div>
      <div>
        <label htmlFor="text" className="sr-only">Last Name</label>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Your Last Name"
            onChange={(e) => setLast_name(e.target.value)}
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Slogan</label>
        <div className="relative">
          <textarea
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Max.50 caractères Slogan" 
            onChange={(e) => setSlogan(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">

      <button
        type="submit"
        className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Submit
      </button>
    </div>


    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>


  )
}

export default ContestForm