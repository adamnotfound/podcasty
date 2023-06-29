import { NavItem } from "@/types/types";
import {
  DiscoverIcon,
  HomeIcon,
  PodcastsIcon,
  QueueIcon,
  RecentsIcon,
} from "./Icons";

const navList: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Discover",
    href: "discover",
    icon: <DiscoverIcon />,
  },
  {
    id: 3,
    title: "My Queue",
    href: "queue",
    icon: <QueueIcon />,
  },
  {
    id: 4,
    title: "My Podcasts",
    href: "podcasts",
    icon: <PodcastsIcon />,
  },
  {
    id: 5,
    title: "Recents",
    href: "recent",
    icon: <RecentsIcon />,
  },
];

export default navList;
