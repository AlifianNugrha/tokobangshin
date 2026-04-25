import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Rocket } from "lucide-react";
import CheckoutModal from "./CheckoutModal";
import type { ProductBundle } from "@/data/products";

const ASCEND_DATA: ProductBundle = {
  id: "max-ascend",
  name: "Max Ascend (2–10)",
  price: "Rp 22.000",
  subtitle: "Paket Ascension Lengkap",
  category: "sword",
  emoji: "🚀",
  materials: [],
  notes: "Proses cepat via trade material. Pastikan inventory cukup.",
  howToGet: "Langsung Hubungi Admin Mimi di WhatsApp",
  image: "/ascend/max.jpg"
};

const AscensionTable = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section id="ascension" className="py-10 md:py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto group"
        >
          <div className="glass-card rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300">
            {/* Image header */}
            <button
              onClick={() => setCheckoutOpen(true)}
              className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-muted block cursor-pointer"
            >
              <img
                src="/ascend/max.jpg"
                alt="Max Ascend"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-[hsl(205,87%,49%)] to-[hsl(215,85%,38%)] text-white px-4 py-2 rounded-xl shadow-lg flex flex-col items-start border border-white/20">
                  <span className="text-[10px] uppercase font-bold opacity-80">Ascend 2-10 (MAX)</span>
                  <span className="text-lg font-black tracking-tight">{ASCEND_DATA.price}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="glass-card text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  🛒 Lihat Detail
                </span>
              </div>
            </button>

            {/* Body */}
            <div className="p-5 md:p-6 flex flex-col">
              <button
                onClick={() => setCheckoutOpen(true)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-foreground text-center mb-1.5 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-[hsl(205,87%,49%)]" /> 
                  Max Ascend
                </h2>
              </button>
              <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                Paket material Ascension 2–10. Dapatkan buff permanen Damage, Luck, Money
                & Gems secara instan!
              </p>

              <button
                onClick={() => setCheckoutOpen(true)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-[hsl(205,87%,49%)] to-[hsl(215,85%,38%)] hover:from-[hsl(205,87%,44%)] hover:to-[hsl(215,85%,33%)] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                Beli Sekarang
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        product={ASCEND_DATA}
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </section>
  );
};

export default AscensionTable;
