import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface IProps {
  children: any;
}

export default function Layout({ children }: IProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Podcasty</title>
      </Head>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col md:ml-[14rem]">
        <Header />
        <main>
          <section className="w-full">{children}</section>{" "}
        </main>
      </div>
    </>
  );
}
