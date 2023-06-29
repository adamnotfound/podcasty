import { useRouter } from "next/router";
import React from "react";

export default function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState<undefined | NodeJS.Timeout>(
    undefined
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Wait for half second to call API to check if user will add anything to the input
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      console.log("Performing search...");
      router.push(`/search/q=${e.target.value}`);
    }, 500);
    // Update the query state and the timeout ID
    setQuery(e.target.value);
    setTimeoutId(newTimeoutId);
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
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);
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
        onChange={handleChange}
        spellCheck={false}
      />
    </form>
  );
}
