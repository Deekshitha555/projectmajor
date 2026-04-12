import type { NextRequest } from "next/server";

// Function to check if a user is authenticated
export const isAuthenticated = (req: NextRequest): boolean => {
  const token = req.cookies.get("authToken"); // Replace "authToken" with your actual cookie name
  return Boolean(token);
};

// Function to log in a user
export const loginUser = async (email: string, password: string): Promise<any> => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error("Login failed");

  const data = await response.json();
  return data;
};
