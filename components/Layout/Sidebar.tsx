import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavItem } from "../../types/types";
import navList from "./NavigationList";

const activeLink = "text-[#ba6fde]";
const inactiveLink = "bg-transparent text-gray";

export default function Sidebar() {
  const router = useRouter();
  console.log(router);
  return (
    <aside className="fixed top-0 left-0 w-56 h-full border-r-2 border-[#2e2e38]">
      <div className="flex flex-col h-full m-3 mt-3 text-sm">
        <Image
          src="/images/logo.png"
          width={60}
          height={30}
          alt="Podcasty Logo"
        />
        <ul className="w-full mt-8 pl-1">
          {navList.map((item: NavItem) => {
            return (
              <div key={item.id}>
                <Link
                  href={
                    router.query.index === item.href ? "#" : `/${item.href}`
                  }
                >
                  <li
                    className={`${
                      router.pathname === item.href ? activeLink : inactiveLink
                    } mb-1 flex items-center p-1 rounded hover:cursor-pointer`}
                  >
                    <span className="flex flex-row gap-3">
                      {item.icon}
                      <span className="mt-1">{item.title}</span>
                    </span>
                  </li>
                </Link>
                {item.id === 2 && (
                  <p className="font-semibold mt-5 mb-1 text-gray-400">
                    YOUR STUFF
                  </p>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
