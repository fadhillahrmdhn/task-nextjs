import LoginForm from "./_components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | codingIn",
  description: "Welcome to codingIn",
  openGraph: {
    title: "Login | codingIn",
    description: "Welcome to codingIn",
    url: "https://codingin.com/login",
    siteName: "codingIn",
    images: [
      {
        url: "login.png",
      },
    ],
  },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>ini Login Page Next.js!</h1>
      <LoginForm />
    </div>
  );
}
