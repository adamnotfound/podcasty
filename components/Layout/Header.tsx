import SearchInput from "../SearchInput";
import { ListIcon, NavigateBack, NavigateFront } from "../Icons";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky p-2 top-0 z-50 flex items-center gap-5 justify-between w-full p-1 pl-3 pr-3 bg-[#161727]/[.97]  mb-6 pb-3">
      <div className="flex items-center gap-5 w-full">
        <div className="flex md:hidden">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="Podcasty Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2 ">
          <button className="rounded-full focus:outline-none text-white/[0.5] text-sm">
            <NavigateBack />
          </button>
          <button className="rounded-full focus:outline-none text-white/[0.5] text-sm">
            <NavigateFront />
          </button>
        </div>
        <SearchInput />
      </div>
      {/* Buttons */}
      {/* <div className="hidden md:flex  justify-center">
        <button className="rounded-none w-full bg-black ">Login</button>
        <button className="rounded-none w-full bg-black ">Register</button>
      </div> */}
      <div className="text-lg text-white">
        <ListIcon />
      </div>
    </header>
  );
}
