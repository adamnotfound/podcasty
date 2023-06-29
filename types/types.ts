interface Image {
  height: number | null;
  url: string | null;
  width: number | null;
}
interface Media {
  artistId: number;
  collectionId: number;
  collectionName: string;
  trackId: number;
  artistName: string;
  trackName: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl600: string;
  artworkUrl100: string;
  artworkUrl60: string;
  hue: string;
  trackTimeMillis: number;
  releaseDate: string;
}

export interface Podcast extends Media {
  kind: "podcast";
}

export interface Episode extends Media {
  kind: "podcast-episode";
}

export interface NavItem {
  id: number;
  title: string;
  href: string;
  icon: JSX.Element;
}
export interface CardItem {
  id: number;
  image: string;
  altTitle: string;
  heading: string;
  subheading: string;
  hue?: string;
  imageRounded?: boolean;
  type: string;
  duration: number;
  date: string;
}
