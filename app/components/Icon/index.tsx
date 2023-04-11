import { MenuProps } from "@/app/util";

const Icon = ({ Icon, title }: MenuProps) => {
  return (
    <div
      className="
       hover:bg-zinc-800 px-0.5 cursor-pointer h-20 rounded-lg flex flex-col items-center justify-center gap-2 text-[0.6rem] font-medium lg:flex-row lg:h-10 lg:justify-start lg:px-4 lg:text-sm"
    >
      <Icon size={22} />
      {title}
    </div>
  );
};
export default Icon;
