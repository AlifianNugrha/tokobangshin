import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import AscensionTable from "@/components/AscensionTable";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { allSwords, allMelee, allItems } from "@/data/products";
import { Search, X, ShoppingBag } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSwords = allSwords.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredMelee = allMelee.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredItems = allItems.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <div className="container mt-8" />

      {/* Search Bar & Category Navigation Pills */}
      <div className="container py-6 flex flex-col items-center">
        {/* Search Input */}
        <div className="relative w-full max-w-2xl mb-4 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-20">
            <div className="p-2 bg-blue-500/10 rounded-xl group-focus-within:bg-blue-500/20 transition-colors">
              <Search className="h-6 w-6 text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)] group-focus-within:scale-110 transition-transform" />
            </div>
          </div>
          <input
            type="text"
            className="w-full pl-16 pr-12 py-5 bg-card/90 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-500/50 outline-none transition-all shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] focus:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.3)] text-foreground placeholder:text-muted-foreground/60 font-bold text-lg md:text-xl"
            placeholder="Ketik nama pedang atau melee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center pr-2 text-muted-foreground hover:text-foreground transition-colors z-20"
            >
              <X className="h-6 w-6 bg-muted/50 rounded-full p-1" />
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="text-sm font-medium px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Ditemukan {filteredSwords.length + filteredMelee.length + filteredItems.length} item
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <button
            onClick={() => document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20 hover:scale-105 transition-all outline-none border border-primary/20 shadow-sm"
          >
            Sword
          </button>
          <button
            onClick={() => document.getElementById("melee")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20 hover:scale-105 transition-all outline-none border border-primary/20 shadow-sm"
          >
            Melee
          </button>
          <button
            onClick={() => document.getElementById("items")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20 hover:scale-105 transition-all outline-none border border-primary/20 shadow-sm"
          >
            Items
          </button>
          <button
            onClick={() => document.getElementById("ascension")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20 hover:scale-105 transition-all outline-none border border-primary/20 shadow-sm"
          >
            Ascend
          </button>
        </div>
      </div>

      {filteredSwords.length > 0 && (
        <>
          <CategorySection
            id="katalog"
            title={`Tersedia (${filteredSwords.length}) Pedang`}
            iconImage="/sword.png"
            description=""
            products={filteredSwords}
          />
          <div className="container"><div className="h-px bg-border my-2" /></div>
        </>
      )}

      {filteredMelee.length > 0 && (
        <CategorySection
          id="melee"
          title={`Tersedia (${filteredMelee.length}) Melee`}
          iconImage="/mele.png"
          description=""
          products={filteredMelee}
        />
      )}

      {filteredItems.length > 0 && (
        <CategorySection
          id="items"
          title={`Tersedia (${filteredItems.length}) Items`}
          iconImage="/item.png"
          description=""
          products={filteredItems}
        />
      )}

      {searchQuery === "" && (
        <>
          <AscensionTable />
          <div className="container"><div className="h-px bg-border" /></div>
        </>
      )}

      {/* <TestimonialMarquee /> */}

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 toko Bang Shin. Total: {allSwords.length} Swords, {allMelee.length} Melee, {allItems.length} Items.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
