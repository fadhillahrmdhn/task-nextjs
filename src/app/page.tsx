import { Navbar } from "./_components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Welcome to my website!</h1>
      </div>
    </>
  );
}
