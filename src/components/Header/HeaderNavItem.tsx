import { textColor } from "@/styles";
import { cn } from "@/utils/helper";
import Link from "next/link";

interface HeaderProps {
  link: { title: string; path: string };
  isNotFoundPage: boolean;
  showBg: boolean;
}

const HeaderNavItem = ({ link, showBg, isNotFoundPage }: HeaderProps) => {
  return (
    <li>
      <Link
        href={link.path}
        className={({ isActive }: { isActive: any}) => {
          return cn(
            "nav-link",
            isActive
              ? ` active ${showBg ? textColor : `text-secColor`}`
              : ` ${
                  isNotFoundPage || showBg
                    ? "text-[#444] dark:text-gray-300 dark:hover:text-secColor hover:text-black"
                    : "text-gray-300 hover:text-secColor"
                }`
          );
        }}
        end
      >
        {link.title}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
