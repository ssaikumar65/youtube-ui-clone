import { FeedProps } from "@/app/util";
import Image from "next/image";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ item }: { item: FeedProps }) => {
  return (
    <div className=" flex flex-col cursor-pointer w-[300px] rounded-lg overflow-hidden">
      <div>
        <Image
          src={item.thumbnailUrl}
          alt="thumbnail"
          width={400}
          height={300}
          priority
          className=" rounded-lg"
        />
      </div>
      <div className=" flex flex-col p-2 gap-1">
        <div className="flex gap-2 items-center group">
          <div className=" grid place-content-center p-4 w-8 h-8 rounded-full overflow-hidden">
            <MdOutlineAccountCircle size={35} />
          </div>
          <span className=" font-semibold flex items-center text-sm">
            {item.title}
          </span>
          <div className=" invisible group-hover:visible grid place-content-center p-4 w-8 h-8 rounded-full overflow-hidden">
            <BsThreeDotsVertical />
          </div>
        </div>
        <span className=" text-sm text-zinc-400">{item.channelName}</span>
        <span className=" text-sm text-zinc-400">
          {item.viewCount} views | {item.createdAt.toDateString()}
        </span>
      </div>
    </div>
  );
};
export default Card;
