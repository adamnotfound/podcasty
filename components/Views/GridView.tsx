import CardItem from "../CardItem";
import { Podcast, Episode } from "../../types/types";
import CardItemGrid from "../CardItemGrid";

interface IProps {
  items: (Podcast | Episode)[];
}

export default function GridView({ items }: IProps) {
  return (
    <>
      {items.length > 0 ? (
        <CardItemGrid>
          {items.map((i) => (
            <CardItem
              key={i.trackId}
              id={i.trackId}
              heading={i.trackName}
              image={i.artworkUrl600}
              altTitle={i.trackName}
              subheading={i.collectionName}
              hue={i.hue}
              type={i.kind}
            />
          ))}
        </CardItemGrid>
      ) : (
        <p className="flex text-center flex-center justify-center items-center h-40">
          No results found
        </p>
      )}
    </>
  );
}
