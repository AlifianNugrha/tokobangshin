import { useState } from "react";
import { Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 gradient-dana shadow-lg">
      <div className="container flex items-center justify-between h-14 md:h-16 px-4">
        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto drop-shadow-md" />
          <div className="flex flex-col">

          </div>
        </a>

        {/* Right side — Notification */}
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-full glass hover:bg-white/20 transition-all">
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </button>
          <button className="relative p-2 rounded-full glass hover:bg-white/20 transition-all">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-blue-500" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
