"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    // Perform login logic
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
