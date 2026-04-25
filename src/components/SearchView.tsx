import { useState, useRef, useEffect } from "react";
import { Search, X, ShoppingBag, ArrowLeft, SearchX, Inbox, Loader2 } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import CategorySection from "@/components/CategorySection";
import { motion } from "framer-motion";

interface SearchViewProps {
  onClose: () => void;
}

const SearchView = ({ onClose }: SearchViewProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isLoading } = useProducts();
  
  const allSwords = data?.allSwords || [];
  const allMelee = data?.allMelee || [];
  const allItems = data?.allItems || [];

  useEffect(() => {
    // Auto-focus on mount
    inputRef.current?.focus();
  }, []);

  const filteredSwords = allSwords.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredMelee = allMelee.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredItems = allItems.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalFound = filteredSwords.length + filteredMelee.length + filteredItems.length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-[hsl(205,87%,49%)] animate-spin mb-4" />
        <p className="text-white/70 text-sm font-semibold animate-pulse">Memuat pencarian...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="min-h-screen bg-background flex flex-col pb-bottom-nav"
    >
      {/* Sticky Header with Search Input */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 pt-safe">
        <div className="container px-4 py-3 flex items-center gap-3">
          {/* Back Button */}
          <button 
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          {/* Search Input Box */}
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-20">
              <Search className="h-4 w-4 text-[hsl(205,87%,49%)] group-focus-within:scale-110 transition-transform" />
            </div>
            <input
              ref={inputRef}
              type="text"
              className="w-full pl-9 pr-10 py-2.5 bg-muted/50 rounded-xl focus:bg-background focus:ring-2 focus:ring-[hsl(205,87%,49%)]/30 border border-transparent focus:border-[hsl(205,87%,49%)]/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/60 text-sm font-medium"
              placeholder="Cari item, pedang, melee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-2 flex items-center text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="h-4 w-4 bg-muted/80 rounded-full p-0.5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results Summary */}
        {searchQuery && (
          <div className="container px-4 pb-3 flex items-center text-xs font-semibold text-muted-foreground">
            <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
            Ditemukan {totalFound} produk
          </div>
        )}
      </div>

      {/* Scrollable Results Area */}
      <div className="flex-1 overflow-y-auto">
        {!searchQuery ? (
          <div className="container px-4 py-12 flex flex-col items-center justify-center text-center opacity-50">
            <Inbox className="w-12 h-12 text-muted-foreground mb-3" />
            <h3 className="text-sm font-bold text-foreground">Ketik Sesuatu</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-[250px]">
              Cari nama pedang, kategori, atau melee favorit kamu di sini.
            </p>
          </div>
        ) : totalFound === 0 ? (
          <div className="container px-4 py-12 flex flex-col items-center justify-center text-center opacity-50">
            <SearchX className="w-12 h-12 text-muted-foreground mb-3" />
            <h3 className="text-sm font-bold text-foreground">Item tidak ditemukan</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-[250px]">
              Coba cari dengan kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="pt-2">
            {filteredSwords.length > 0 && (
              <CategorySection
                id="search-sword"
                title={`Pedang (${filteredSwords.length})`}
                iconImage="/sword.png"
                description=""
                products={filteredSwords}
              />
            )}

            {filteredMelee.length > 0 && (
              <CategorySection
                id="search-melee"
                title={`Melee (${filteredMelee.length})`}
                iconImage="/mele.png"
                description=""
                products={filteredMelee}
              />
            )}

            {filteredItems.length > 0 && (
              <CategorySection
                id="search-items"
                title={`Items (${filteredItems.length})`}
                iconImage="/item.png"
                description=""
                products={filteredItems}
              />
            )}
            
            {/* End of results spacer */}
            <div className="h-8" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchView;
