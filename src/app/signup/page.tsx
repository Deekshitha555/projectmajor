"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API response:", data); 
      console.log(data);
      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Signup error:", data.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-200 rounded shadow">
        <h2 className="mb-4 text-2xl font-bold text-center text-black">Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded  text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password(least 8 characters)"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded  text-black"
        />
        <button type="submit" className="w-full p-2 text-white rounded bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
>
          Sign Up   
        </button>
         <p className="mt-4 text-center text-gray-700">
          already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login 
          </a>
          </p>
      </form>
    </div>
  );
}
