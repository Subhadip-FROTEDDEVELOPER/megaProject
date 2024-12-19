import React from "react";
import inputBox from "./input";
const SignUp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form action="/signup" method="POST">
          <div className="mb-4">
            {inputBox.map(({ type, id, name, placeholder, required,lebel,autocomplete }) => (
              <>
                <label className="block text-gray-700 mb-2 mt-3" htmlFor={id}>
                  {lebel}
                </label>
                <input
                  className="border-2 p-2 rounded w-full"
                  key={id}
                  type={type}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  autoComplete={autocomplete}
                />
              </>
            ))}
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
