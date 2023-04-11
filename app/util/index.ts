import { HiHome } from "react-icons/hi";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import {
  MdVideoLibrary,
  MdSubscriptions,
  MdOutlineHistory,
} from "react-icons/md";
import { IconType } from "react-icons/lib";

export type MenuProps = {
  Icon: IconType;
  title: string;
};
export const data: Array<MenuProps> = [
  {
    Icon: HiHome,
    title: "Home",
  },
  {
    Icon: TiSocialYoutubeCircular,
    title: "Shorts",
  },
  {
    Icon: MdSubscriptions,
    title: "Subscriptions",
  },
  {
    Icon: MdVideoLibrary,
    title: "Library",
  },
  {
    Icon: MdOutlineHistory,
    title: "History",
  },
];

export type FeedProps = {
  thumbnailUrl: string;
  channelName: string;
  title: string;
  viewCount: string;
  createdAt: Date;
};
const convertNumber = (val: number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(val);
};

export const feed: FeedProps[] = [
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: convertNumber(2139763),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: convertNumber(72421),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: convertNumber(32981),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: convertNumber(120391),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: convertNumber(501492),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: convertNumber(113482),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: convertNumber(1564274),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: convertNumber(297482),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: convertNumber(203784982),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: convertNumber(550929),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: convertNumber(4567382),
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: convertNumber(5382594),
    createdAt: new Date(),
  },
];
