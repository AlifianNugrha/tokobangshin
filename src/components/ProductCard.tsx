import { motion } from "framer-motion";
import { ShoppingCart, Tag, Sword, Swords, Package, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CheckoutModal from "./CheckoutModal";
import type { ProductBundle } from "@/data/products";

const ProductCard = ({
  product,
  index,
}: {
  product: ProductBundle;
  index: number;
}) => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const folderName = product.category === "melee" ? "mele" : product.category;
  const imageUrl = product.image || `/${folderName}/${product.id}.jpg`;

  const handleBuy = () => {
    setCheckoutOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-card-hover transition-all duration-300"
      >
        {/* Clickable Image Area */}
        <button
          onClick={handleBuy}
          className="relative w-full aspect-square overflow-hidden cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50"
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
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 text-[hsl(205,87%,49%)]/40 group-hover:scale-110 transition-transform duration-300">
                {product.category === "sword" ? <Sword className="w-full h-full" /> : 
                 product.category === "melee" ? <Swords className="w-full h-full" /> : 
                 <Package className="w-full h-full" />}
              </div>
            </div>
          )}
          {/* F Skill Badge */}
          {product.fSkill && (
            <div className="absolute top-2 right-2 z-20">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg border border-white/20 animate-pulse">
                + F MOVE
              </span>
            </div>
          )}
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Hover label */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="glass-card text-foreground text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <Search className="w-3.5 h-3.5" /> Lihat Detail
            </span>
          </div>
        </button>

        {/* Body section */}
        <div className="p-2.5 md:p-3.5 flex-1 flex flex-col">
          <button
            onClick={handleBuy}
            className="text-left mb-1.5 group/title w-full"
          >
            <h3 className="font-bold text-foreground text-[11px] md:text-sm leading-tight group-hover/title:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>

            {/* Price Display */}
            {product.price && (
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="text-[hsl(205,87%,49%)] font-extrabold text-xs md:text-sm flex items-center gap-1">
                  <Tag className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  {product.price}
                </span>
              </div>
            )}
          </button>

          {/* Spacer */}
          <div className="mt-auto" />
        </div>

        {/* BUY Button */}
        <button
          onClick={handleBuy}
          className="relative flex items-center justify-center gap-1.5 w-full py-3 md:py-3.5 transition-all duration-300 text-[11px] md:text-sm font-bold overflow-hidden rounded-b-2xl bg-gradient-to-r from-[hsl(205,87%,49%)] to-[hsl(215,85%,38%)] hover:from-[hsl(205,87%,44%)] hover:to-[hsl(215,85%,33%)] text-white"
        >
          <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4" />
          Beli Sekarang
          {/* Subtle shine effect */}
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
        </button>
      </motion.div>

      {/* Checkout Modal */}
      <CheckoutModal
        product={product}
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
};

export default ProductCard;
