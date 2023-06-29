import React from "react";
import { GetServerSideProps } from "next";
import { Episode, Podcast } from "@/types/types";
import SectionView from "@/components/Section";

interface IProps {
  searchWord?: string;
  podcasts: Podcast[];
  episodes: Episode[];
}

export default function Home({ searchWord, podcasts, episodes }: IProps) {
  return (
    <>
      {!searchWord ? (
        <p className="flex text-md text-gray-300 text-center flex-center justify-center items-center h-40">
          Type something to start searching...
        </p>
      ) : (
        <>
          <SectionView
            title={`Latest podcasts for ${searchWord}`}
            initialView="Scroll"
            items={podcasts}
            type="podcast"
          />
          <SectionView
            title={`Latest episodes for ${searchWord}`}
            items={episodes}
            type="episode"
          />
        </>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let searchWord;
  let data,
    podcasts,
    episodes = [];
  let { query } = ctx;
  searchWord = query.index?.slice(2);
  if (!searchWord)
    return {
      props: {
        searchWord,
      },
    };

  console.log("Getting data..");
  const resultsResponse = await fetch(
    `${process.env.API_URL}/search/${searchWord}`
  );

  if (resultsResponse.status !== 200)
    return { props: { searchWord, podcasts: [], episodes: [] } };
  data = await resultsResponse?.json();
  return {
    props: { searchWord, podcasts: data?.podcasts, episodes: data?.episodes },
  };
};
