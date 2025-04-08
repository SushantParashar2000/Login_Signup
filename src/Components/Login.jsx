import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = "This field is required";
    }
    if (!password) {
      formErrors.password = "This field is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{ height: "100vh" }}>
      <div className="w-96 p-8 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : "focus:ring-blue-500"}`}/>
              {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? "border-red-500" : "focus:ring-blue-500"}`}/>
            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}
          </div>

          <button
            type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">Don't have an account?{" "}
          <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
