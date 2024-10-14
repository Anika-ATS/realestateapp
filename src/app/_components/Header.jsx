"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm w-full  fixed top-0 z-10 bg-white">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150}></Image>
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`"hover:text-primary font-medium text-sm cursor-pointer" ${
                path == "/" && "text-primary"
              }`}
            >
              For Sale
            </li>
          </Link>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            For Rent
          </li>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            Agent Finder
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button>
          <Plus className="h-5 w-5 "></Plus> Post Your Add{" "}
        </Button>
        <Button variant="outline">Login </Button>
      </div>
    </div>
  );
};

export default Header;
