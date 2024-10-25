"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import React from "react";
import Link from "next/link";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, user } = useUser();
  return (
    <div className="container px-10 min-h-screen">
      {/* header */}
      <div className="flex border border-red-500 px-10 justify-between items-center py-2">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black z-20">
          Farm Hub
        </span>
        <div className="">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "2.5rem",
                  height: "2.5rem",
                },
              },
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 border border-green-500 px-10 py-2 my-5">
        <Link href={"/expense-management"}>
          <Button>
            <FaUserCog /> Labour Expenses Management
          </Button>
        </Link>
        <Button>
          {" "}
          <BsStars /> Ai Recommemdations
        </Button>
        <Button>
          <WiDaySunny /> Real time weather updates{" "}
        </Button>
        <Button>
          {" "}
          <FaRegCalendarAlt />
          Weekly Payment Update
        </Button>
        <Button>
          {" "}
          <AiOutlineUsergroupAdd />
          Community
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
