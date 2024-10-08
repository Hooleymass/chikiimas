import { INavLink } from "@/types";
import { listItem, activeListItem } from "@/styles";
import { cn } from "@/utils/helper";
import Link from "next/link";

interface SidebarNavItemProps {
  link: INavLink;
  closeSideBar: () => void;
}

const SidebarNavItem = ({ link, closeSideBar }: SidebarNavItemProps) => {
  return (
    <li>
      <Link
        href={link.path}
        className={({ isActive }) => {
          return cn(listItem, isActive && activeListItem);
        }}
        onClick={closeSideBar}
      >
        {<link.icon className="text-[18px]" />}
        <span>{link.title}</span>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
