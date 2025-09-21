// app/(site)/admissions/login/page.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful (Demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/uetm-campus-login.jpg')" // UETM campus image
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl shadow-xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a href="/admissions/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  );
}
