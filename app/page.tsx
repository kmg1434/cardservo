import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <nav className="p-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="font-mono text-slate-900 font-bold text-9xl">Cardservo</Link></li>
            </ul>
          </nav>

          <div className="flex shrink-0 px-4 py-3 rounded-md border-2 bg-slate-200 border-slate-600 overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              className="fill-gray-600 mr-3 rotate-90">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
            <input type="email" placeholder="Search Something..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
          </div>


        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </div>
  );
}
