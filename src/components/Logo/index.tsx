import React from "react";
import Link from "next/link";

import { cn } from "@/utils/helper";

interface logoProps {
  className?: string;
  logoColor?: string;
}

const Logo: React.FC<logoProps> = ({
  className = "",
  logoColor = "text-black dark:text-primary",
}) => (
  <Link
    href="/"
    className={cn(`flex flex-row items-center xs:gap-2 gap-[6px])`, className)}
    title="Home"
  >
    <span
      className={cn(logoColor,`font-semibold sm:text-[18px] text-[16.75px]`)}
    >
       Chikiimass
    </span>
  </Link>
);

export default Logo;
