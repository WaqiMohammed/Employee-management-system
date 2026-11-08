import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`Email is ${email} , Password is ${password} Has submitted`);

    setEmail('')
    setPassword('')
  }


  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
      <div className='border-2 border-white p-20 rounded-xl'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='border-2 border-red-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' required type="Email" placeholder='Enter your Email' />
          <input 
          value={password}
          onChange={(e)=> {
            setPassword(e.target.value)
          }}
          className=' mt-3 border-2 border-red-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' required type="password"  placeholder='Enter your Password'/>
          <button className= 'mt-5 border-2 bg-red-600 rounded-full py-3 px-26 text-xl outline-none' type='submit'>Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login