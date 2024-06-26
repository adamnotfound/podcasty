import { GetServerSideProps } from "next";
import { Episode, Podcast } from "@/types/types";
import SectionView from "@/components/Section";

interface IProps {
  podcasts: Podcast[];
  episodes: Episode[];
}
export default function Home({ podcasts, episodes }: IProps) {
  return (
    <>
      <SectionView
        title={`Latest podcasts`}
        initialView="Scroll"
        items={podcasts}
        type="podcast"
      />
      <SectionView title={`Latest episodes`} items={episodes} type="episode" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const resultsResponse = await fetch(`${process.env.API_URL}/search/فنجان`);
  let data = [];
  if (resultsResponse.status !== 200)
    return { props: { podcasts: [], episodes: [] } };
  data = await resultsResponse?.json();
  return { props: { podcasts: data?.podcasts, episodes: data?.episodes } };
};
