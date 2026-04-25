import { Home, Search, ScanLine, LayoutGrid, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  onScanClick: () => void;
  activeTab: "home" | "search" | "katalog";
  onChangeTab: (tab: "home" | "search" | "katalog") => void;
  onChatClick: () => void;
}

const BottomNav = ({ onScanClick, activeTab, onChangeTab, onChatClick }: BottomNavProps) => {
  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20" />

      <div className="fixed bottom-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/40 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between px-2 md:px-6 py-2 max-w-md md:max-w-xl mx-auto relative">
          
          {/* Home */}
          <button
            onClick={() => onChangeTab("home")}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all",
              activeTab === "home" ? "text-[hsl(205,87%,49%)]" : "text-gray-400"
            )}
          >
            <div className={cn("p-1.5 rounded-full transition-colors", activeTab === "home" && "bg-[hsl(205,87%,49%)]/10")}>
              <Home className={cn("w-5 h-5", activeTab === "home" && "fill-[hsl(205,87%,49%)]/20")} />
            </div>
            <span className="text-[10px] font-semibold">Home</span>
          </button>

          {/* Search */}
          <button
            onClick={() => onChangeTab("search")}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all",
              activeTab === "search" ? "text-[hsl(205,87%,49%)]" : "text-gray-400"
            )}
          >
            <div className={cn("p-1.5 rounded-full transition-colors", activeTab === "search" && "bg-[hsl(205,87%,49%)]/10")}>
              <Search className={cn("w-5 h-5", activeTab === "search" && "stroke-[3px]")} />
            </div>
            <span className="text-[10px] font-semibold">Search</span>
          </button>

          {/* Scan QR (Center Floating Button) */}
          <div className="relative -top-5 flex flex-col items-center">
            <button
              onClick={onScanClick}
              className="w-14 h-14 bg-gradient-to-br from-[hsl(205,87%,49%)] to-[hsl(215,85%,38%)] rounded-2xl flex items-center justify-center shadow-blue-glow hover:scale-105 active:scale-95 transition-all text-white border-2 border-background"
            >
              <ScanLine className="w-6 h-6" />
            </button>
            <span className="text-[10px] font-bold text-[hsl(205,87%,49%)] mt-1 tracking-tight">Scan QR</span>
          </div>

          {/* Katalog */}
          <button
            onClick={() => onChangeTab("katalog")}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all",
              activeTab === "katalog" ? "text-[hsl(205,87%,49%)]" : "text-gray-400"
            )}
          >
            <div className={cn("p-1.5 rounded-full transition-colors", activeTab === "katalog" && "bg-[hsl(205,87%,49%)]/10")}>
              <LayoutGrid className={cn("w-5 h-5", activeTab === "katalog" && "fill-[hsl(205,87%,49%)]/20")} />
            </div>
            <span className="text-[10px] font-semibold">Katalog</span>
          </button>

          {/* Social / Chat */}
          <button
            onClick={onChatClick}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all text-gray-400 hover:text-green-500"
          >
            <div className="p-1.5 rounded-full transition-colors group-hover:bg-green-500/10">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold">Chat</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
