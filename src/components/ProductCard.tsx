import { motion } from "framer-motion";
import { ShoppingCart, Tag, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ProductDetailModal from "./ProductDetailModal";
import type { ProductBundle } from "@/data/products";

const WHATSAPP_NUMBER = "6283841580448";

const ProductCard = ({
  product,
  index,
}: {
  product: ProductBundle;
  index: number;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const folderName = product.category === "melee" ? "mele" : product.category;
  const imageUrl = product.image || `/${folderName}/${product.id}.jpg`;

  const handleBuy = () => {
    const categoryName = 
      product.category === "sword" ? "🗡️ Sword" : 
      product.category === "melee" ? "👊 Melee" : 
      "📦 Item/Material";

    const fSkillInfo = product.fSkill 
      ? `🔥 + F Move: Includes materials to unlock F Skill\n` 
      : "";

    const message = `Halo Admin Mimi, saya mau order di Toko Bang Shin! 🛒\n\n` +
      `--- DETAIL PESANAN ---\n` +
      `🔥 Produk: ${product.name}\n` +
      `📂 Kategori: ${categoryName}\n` +
      `💰 Harga: ${product.price || "Tanya Admin"}\n` +
      fSkillInfo +
      `------------------------\n\n` +
      `Mohon diproses ya min! Terima kasih.`;
    
    // Copy to clipboard as backup
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Redirect immediately
    window.open(whatsappUrl, "_blank");
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
      >
        {/* Clickable Image Area — opens detail modal */}
        <button
          onClick={handleBuy}
          className="relative w-full aspect-square bg-gradient-to-br from-primary/10 via-accent/50 to-primary/5 overflow-hidden cursor-pointer"
          aria-label={`Beli ${product.name}`}
        >
          {!imgError ? (
            <img
              src={imageUrl}
              alt={product.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent to-primary/5">
              <span className="text-4xl md:text-7xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </span>
            </div>
          )}
          {/* F Skill Badge */}
          {product.fSkill && (
            <div className="absolute top-2 right-2 z-20">
              <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-md shadow-lg border border-white/20 animate-pulse">
                + F MOVE
              </span>
            </div>
          )}
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Hover label */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 text-foreground text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              🛒 Beli Sekarang
            </span>
          </div>
        </button>

        {/* Body section — only name + button */}
        <div className="p-2.5 md:p-4 flex-1 flex flex-col">
          <button
            onClick={handleBuy}
            className="text-left mb-2 group/title w-full"
          >
            <h3 className="font-bold text-foreground text-[11px] md:text-sm leading-tight group-hover/title:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>

            {/* Price Display */}
            {product.price && (
              <div className="mt-2 flex items-center gap-1.5 text-blue-600 font-extrabold text-xs md:text-sm">
                <Tag className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {product.price}
              </div>
            )}
          </button>

          {/* Spacer */}
          <div className="mt-auto" />
        </div>

        {/* BUY Button */}
        <button
          onClick={handleBuy}
          disabled={isCopied}
          className={cn(
            "relative flex items-center justify-center gap-1.5 w-full py-3.5 md:py-4 transition-all duration-300 text-[11px] md:text-sm font-bold overflow-hidden",
            isCopied 
              ? "bg-green-500 text-white" 
              : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
          )}
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 animate-in zoom-in duration-300" />
              Teks Order Disalin!
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Beli Sekarang
            </>
          )}
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </motion.div>

      {/* Detail Modal */}
      <ProductDetailModal
        product={product}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};

export default ProductCard;
