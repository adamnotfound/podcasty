import { useRouter } from "next/router";
import React from "react";

export default function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
    router.push(`/search/q=${query}`);
  };

  // When route change, if you're still in search page, set input default value from query
  React.useEffect(() => {
    if (router.pathname.includes("search")) {
      setQuery(String(router.query.index?.slice(2)));
    } else {
      setQuery("");
    }
    return () => {};
  }, [router]);

  return (
    <form
      className="flex items-center justify-between w-full bg-transparent rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-grow w-full text-center text-white/[0.5] placeholder:text-white/[0.3] bg-transparent p-3 rounded-lg border-white/[0.25] border-2 focus:border-[#7B7BF0] focus:outline-none focus:text-white focus:bg-white/[0.05] h-9 focus:placeholder:text-transparent md:text-sm"
        placeholder="Search through over 30 million podcasts and episodes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
