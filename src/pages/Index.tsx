import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import AscensionTable from "@/components/AscensionTable";
import BottomNav from "@/components/BottomNav";
import QRScanModal from "@/components/QRScanModal";
import SocialLinksModal from "@/components/SocialLinksModal";
import GameSelection from "@/components/GameSelection";
import SearchView from "@/components/SearchView";
import { Trophy, Sword, Swords, Package, Rocket, ArrowRight, Loader2 } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "search" | "katalog">("home");
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [katalogTab, setKatalogTab] = useState("sword"); // sword, melee, items, ascend
  const { data, isLoading } = useProducts();
  const allSwords = data?.allSwords || [];
  const allMelee = data?.allMelee || [];
  const allItems = data?.allItems || [];
  
  const handleActionSelect = (actionId: string) => {
    setKatalogTab(actionId);
    setCurrentPage("katalog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
          <p className="text-white/70 text-sm font-semibold animate-pulse">Memuat Toko Bang Shin...</p>
        </div>
      </div>
    );
  }

  // If Search is active, render the dedicated search view.
  if (currentPage === "search") {
    return <SearchView onClose={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-background pb-bottom-nav">
      <Navbar />

      {/* --- HOME VIEW --- */}
      {currentPage === "home" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <HeroSection 
            onScanClick={() => setQrModalOpen(true)} 
            onActionSelect={handleActionSelect}
          />
          <GameSelection onSelect={(gameId) => {
            if (gameId === "sailor-piece") {
              setCurrentPage("katalog");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }} />

          {/* Catalog Preview */}
          <div className="container px-4 mt-8 mb-6">
            <h2 className="font-extrabold text-lg text-foreground mb-4 flex items-center">
              <Sword className="w-5 h-5 mr-2 text-[hsl(205,87%,49%)]" />
              Populer
            </h2>
            <div className="h-px bg-border/60 mb-5" />
            <CategorySection
              id="home-preview"
              title=""
              products={allSwords.slice(0, 4)}
              iconImage=""
              description=""
            />
            
            <button
              onClick={() => {
                setKatalogTab("sword");
                setCurrentPage("katalog");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl glass-blue text-[hsl(205,87%,49%)] text-sm font-bold shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
            >
              Lihat Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* --- KATALOG VIEW --- */}
      {currentPage === "katalog" && (
        <div className="animate-in fade-in duration-300">
          {/* Sticky Tab Header */}
          <div className="sticky top-14 md:top-16 z-40 bg-background/80 backdrop-blur-md pt-4 pb-2 border-b border-border/50">
            <div className="container px-4">
              <div className="flex bg-muted/50 p-1.5 rounded-2xl md:max-w-2xl mx-auto overflow-x-auto hide-scrollbar">
                <button
                  onClick={() => setKatalogTab("sword")}
                  className={cn(
                    "flex-1 min-w-[80px] flex items-center justify-center py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all",
                    katalogTab === "sword" ? "bg-white text-[hsl(205,87%,49%)] shadow-md" : "text-muted-foreground hover:bg-white/50"
                  )}
                >
                  <Sword className="w-4 h-4 mr-1.5" />
                  Sword
                </button>
                <button
                  onClick={() => setKatalogTab("melee")}
                  className={cn(
                    "flex-1 min-w-[80px] flex items-center justify-center py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all",
                    katalogTab === "melee" ? "bg-white text-[hsl(205,87%,49%)] shadow-md" : "text-muted-foreground hover:bg-white/50"
                  )}
                >
                  <Swords className="w-4 h-4 mr-1.5" />
                  Melee
                </button>
                <button
                  onClick={() => setKatalogTab("items")}
                  className={cn(
                    "flex-1 min-w-[80px] flex items-center justify-center py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all",
                    katalogTab === "items" ? "bg-white text-[hsl(205,87%,49%)] shadow-md" : "text-muted-foreground hover:bg-white/50"
                  )}
                >
                  <Package className="w-4 h-4 mr-1.5" />
                  Items
                </button>
                <button
                  onClick={() => setKatalogTab("ascend")}
                  className={cn(
                    "flex-1 min-w-[80px] flex items-center justify-center py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all",
                    katalogTab === "ascend" ? "bg-white text-[hsl(205,87%,49%)] shadow-md" : "text-muted-foreground hover:bg-white/50"
                  )}
                >
                  <Rocket className="w-4 h-4 mr-1.5" />
                  Ascend
                </button>
              </div>
            </div>
          </div>

          <div className="min-h-[60vh] pt-2">
            {katalogTab === "sword" && (
              <CategorySection
                id="sword-section"
                title={`Pedang (${allSwords.length})`}
                iconImage="/sword.png"
                description="Koleksi pedang terbaik Sailor Piece."
                products={allSwords}
              />
            )}

            {katalogTab === "melee" && (
              <CategorySection
                id="melee-section"
                title={`Melee (${allMelee.length})`}
                iconImage="/mele.png"
                description="Gaya bertarung jarak dekat mematikan."
                products={allMelee}
              />
            )}

            {katalogTab === "items" && (
              <CategorySection
                id="items-section"
                title={`Items (${allItems.length})`}
                iconImage="/item.png"
                description="Material form dan item kebutuhan lainnya."
                products={allItems}
              />
            )}

            {katalogTab === "ascend" && (
              <div className="pt-4">
                <AscensionTable />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      {(currentPage === "home" || currentPage === "katalog") && (
        <footer className="py-6 mt-4">
          <div className="container px-4 text-center">
            <div className="glass-card rounded-xl md:rounded-2xl p-4">
              <p className="text-xs text-muted-foreground font-medium">
                © 2026 Toko Bang Shin • {allSwords.length} Swords • {allMelee.length} Melee • {allItems.length} Items
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">
                Sailor Piece Marketplace — Powered with ⚡
              </p>
            </div>
          </div>
        </footer>
      )}

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={currentPage}
        onChangeTab={setCurrentPage}
        onScanClick={() => setQrModalOpen(true)}
        onChatClick={() => setSocialModalOpen(true)}
      />

      {/* Modal Overlays */}
      <QRScanModal
        open={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />
      <SocialLinksModal 
        open={socialModalOpen} 
        onClose={() => setSocialModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
