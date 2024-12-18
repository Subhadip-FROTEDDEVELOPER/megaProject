import React from 'react'

const SignUp = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form action="/signup" method="POST">
       <div class="mb-4"> 
        <label class="block text-gray-700 mb-2" for="username">Username</label>
         <input class="border-2 p-2 rounded w-full" type="text" id="username" name="username" placeholder="Enter your username" required/> 
         </div> 
         <div class="mb-4"> 
          <label class="block text-gray-700 mb-2" for="email">Email</label> 
          <input class="border-2 p-2 rounded w-full" type="email" id="email" name="email" placeholder="Enter your email" required/> 
          </div> 
          <div class="mb-6"> 
            <label class="block text-gray-700 mb-2" for="password">Password</label>
             <input class="border-2 p-2 rounded w-full" type="password" id="password" name="password" placeholder="Enter your password" required/>
              </div> 
              <button class="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 w-full" type="submit">Sign Up</button> </form>
      </div>
    </div>
  );
}

export default SignUp

