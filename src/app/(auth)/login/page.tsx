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
    <div className="items-center justify-center mx-3">
      <LoginForm />
    </div>
  );
}
