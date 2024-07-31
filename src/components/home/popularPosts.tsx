import { popularPosts as Posts } from "@/lib/placeholder-data"; // 修正拼写
import { Icons } from "../ui/icons";
const PopularPosts = () => {
  return (
    <div className=" overflow-hidden">
      {Posts.map((item) => (
        <li
          className="gap-2 cursor-pointer py-4  dark:text-white group text-slate-700 list-none  grid grid-cols-[5fr_95fr] items-center"
          key={item.title}
        >
          <Icons.ArrowRights className="w-6 h-6 group-hover:translate-x-2 transition-all " />
          <p className=" inline">{item.title}</p>
        </li>
      ))}
    </div>
  );
};

export default PopularPosts;
