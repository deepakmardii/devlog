"use client";

import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          DevLog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-violet-500"></div>
      </div>
      <LoginForm />
    </nav>
  );
}

export default Navbar;
