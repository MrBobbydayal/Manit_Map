import React from 'react'
import { useState } from 'react'
import {useNavigate }from 'react-router-dom'

const SignUp = () => {

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      'username':username,
      'email':email,
      'password':password
    }

    try {
      const res = await fetch("http://localhost:8000/api/v1/ManitMap/users/register", {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if(res.status==201){
        navigate('/')
      }
      else if(res.status==500){
        alert('Something went wrong while registering the user')
      }else if(res.status==409){
        alert('User with email or username already exists')
      }else if(res.status==400){
        alert('All fields are Required')
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };








  return (
    <div className='justify-items-center mt-20'>
      <form onSubmit={handleSubmit}>
    <div class="w-80 rounded-2xl bg-slate-900 self-center">
        <div class="flex flex-col gap-2 p-8">
           <p class="text-center text-3xl text-gray-300 mb-4">Register</p>
           <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
           placeholder="Username"
           required
           value={username}
           onChange={(e)=>setUsername(e.target.value)}/>
           <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
           placeholder="Email"
           required
           value={email}
           onChange={(e)=>setEmail(e.target.value)}/>
           <input type='password' class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
           placeholder="Password"
           required
           value={password}
           onChange={(e)=>setPassword(e.target.value)}/>
           <input type='password' class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
           placeholder="Confirm password"
           required/>
           <label class="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                    Accept terms of use
                <div class="relative inline-block">
                      <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" required/>
                      <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                </div>
           </label>
         <button class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
        </div>
    </div>
    </form>
</div>
  )
}

export default SignUp