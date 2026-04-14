import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink, Rocket, Tag, Check } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import type { ProductBundle } from "@/data/products";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "6283841580448";

const ASCEND_DATA: ProductBundle = {
  id: "max-ascend",
  name: "Max Ascend (2–10)",
  price: "Rp 19.000",
  subtitle: "Paket Ascension Lengkap",
  category: "sword", // filler
  emoji: "🚀",
  materials: [],
  notes: "Proses cepat via trade material. Pastikan inventory cukup.",
  howToGet: "Langsung Hubungi Admin Mimi di WhatsApp",
  image: "/ascend/max.jpg"
};

const AscensionTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleBuy = () => {
    const message = `Halo Admin Mimi, saya mau order di Toko Bang Shin! 🛒\n\n` +
      `--- DETAIL PESANAN ---\n` +
      `🚀 Produk: ${ASCEND_DATA.name}\n` +
      `💰 Harga: ${ASCEND_DATA.price}\n` +
      `------------------------\n\n` +
      `Mohon diproses ya min! Terima kasih.`;

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
    <section id="ascension" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto group"
        >
          <div className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
            {/* Image header - Clickable */}
            <button
              onClick={handleBuy}
              className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-muted block cursor-pointer"
            >
              <img
                src="/ascend/max.jpg"
                alt="Max Ascend"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg flex flex-col items-start border border-white/20">
                  <span className="text-[10px] uppercase font-bold opacity-80">Ascend 2-10 (MAX)</span>
                  <span className="text-lg font-black tracking-tight">{ASCEND_DATA.price}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  🛒 Beli Sekarang
                </span>
              </div>
            </button>

            {/* Body & Buy button */}
            <div className="p-5 md:p-6 flex flex-col">
              <button
                onClick={handleBuy}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-foreground text-center mb-1.5 flex items-center justify-center gap-2">
                  🚀 Max Ascend
                </h2>
              </button>
              <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                Paket material Ascension 2–10. Dapatkan buff permanen Damage, Luck, Money
                & Gems secara instan!
              </p>

              <button
                onClick={handleBuy}
                disabled={isCopied}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white text-base font-bold shadow-md transition-all duration-300",
                  isCopied
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg"
                )}
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                    Format Pesanan Disalin!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Beli Sekarang
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <ProductDetailModal
        product={ASCEND_DATA}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default AscensionTable;
