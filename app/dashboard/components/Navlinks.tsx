"use client";
import React from "react";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/dashboard",
      text: "Dashboard",
      Icon: ReaderIcon,
    },
    {
      href: "/dashboard/user",
      text: "user",
      Icon: PersonIcon,
    },
  ];
  return (
    <div className="flex items-center gap-5 border-b pb-2 mb-4">
      {links.map(({ href, text, Icon }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={cn("flex items-center gap-1 transition-all", {
              "text-violet-500": pathname === href,
            })}
          >
            <Icon />/{text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
