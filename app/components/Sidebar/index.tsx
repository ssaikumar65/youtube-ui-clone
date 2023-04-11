import { data as MenuItems } from "@/app/util";
import Icon from "../Icon";

const Sidebar = () => {
  return (
    <div className=" hidden w-18 p-2 flex-col  transition-all gap-2 sm:flex lg:w-56 lg:px-3">
      {MenuItems.map((item, index) => (
        <Icon key={index} Icon={item.Icon} title={item.title} />
      ))}
    </div>
  );
};
const SidebarExtended = () => {
  return (
    <div className=" w-18 px-1 py-2 flex flex-col">
      {MenuItems.map((item, index) => (
        <Icon key={index} Icon={item.Icon} title={item.title} />
      ))}
    </div>
  );
};
export default Sidebar;
