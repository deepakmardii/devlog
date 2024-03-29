"use client";

import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

function Navbar() {
  const user = useUser((state) => state.user);

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          DevLog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-violet-500"></div>
      </div>
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
}

export default Navbar;
