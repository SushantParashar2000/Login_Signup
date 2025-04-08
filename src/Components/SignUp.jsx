import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) {
      formErrors.name = "This field is required";
    }
    if (!email) {
      formErrors.email = "This field is required";
    }
    if (!password) {
      formErrors.password = "This field is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted", { name, email, password });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{ height: "100vh" }}>
      <div className="w-96 p-8 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? "border-red-500" : "focus:ring-blue-500"}`}/>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : "focus:ring-blue-500"}`}/>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword
            (e.target.value)} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500" : "focus:ring-blue-500"}`}/>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">Already have an account?{" "}
          <a href="/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
