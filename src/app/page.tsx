import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
