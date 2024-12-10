import Link from "next/link";
import Navbar from "./components/nav-bar";
import { SearchBar } from "./components/search-bar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <nav className="p-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="font-mono text-slate-900 font-bold text-9xl">
                  Cardservo
                </Link>
              </li>
            </ul>
          </nav>
          {/* <div className="flex mx-auto">
            <SearchBar searchBarProps={{ placeholder: "Search Cards..." }} />
          </div> */}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </div>
  );
}
