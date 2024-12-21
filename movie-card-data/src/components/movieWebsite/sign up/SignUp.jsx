import React, { useState } from "react";
import inputBox from "./input";
const SignUp = () => {
  // const [firstname, setFirstname] = useState();
  // const [lastname, setLastname] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [phonenumber, setPhonenumber] = useState();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // switch (name) {
    //   case "firstname":
    //     setFirstname(value);
    //     break;

    //   case "lastname":
    //     setLastname(value);
    //     break;

    //   case "email":
    //     setEmail(value);
    //     break;

    //   case "password":
    //     setPassword(value);
    //     break;

    //   case "phonenumber":
    //     setPhonenumber(value);
    //     break;
    // }
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
    // setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
    // const fromData = {
    //   firstname,
    //   lastname,
    //   email,
    //   password,
    //   phonenumber,
    // };
    console.log(user);
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form action="/signup" method="POST" onSubmit={handleFromSubmit}>
          <div className="mb-4">
            {inputBox.map(
              ({
                type,
                id,
                name,
                placeholder,
                required,
                lebel,
                autocomplete,
              }) => (
                <div key={id}>
                  <label className="block text-gray-700 mb-2 mt-3" htmlFor={id}>
                    {lebel}
                  </label>
                  <input
                    className="border-2 p-2 rounded w-full"
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={autocomplete}
                    value={user[name]}
                    onChange={handleInputChange}
                  />
                </div>
              )
            )}
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
