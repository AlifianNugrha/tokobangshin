import { motion } from "framer-motion";
import { Sword, Swords, Package, Rocket, ScanLine } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

interface HeroSectionProps {
  onScanClick: () => void;
  onActionSelect?: (actionId: string) => void;
}

const quickActions = [
  { id: "sword", icon: Sword, label: "Sword", color: "from-blue-500 to-blue-600" },
  { id: "melee", icon: Swords, label: "Melee", color: "from-purple-500 to-purple-600" },
  { id: "items", icon: Package, label: "Items", color: "from-amber-500 to-orange-500" },
  { id: "ascend", icon: Rocket, label: "Ascend", color: "from-emerald-500 to-green-600" },
];

const HeroSection = ({ onScanClick, onActionSelect }: HeroSectionProps) => {
  const { data } = useProducts();
  const allSwords = data?.allSwords || [];
  const allMelee = data?.allMelee || [];
  const allItems = data?.allItems || [];
  
  const totalProducts = allSwords.length + allMelee.length + allItems.length;

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden gradient-dana">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-white/8 blur-xl" />
      </div>

      <div className="container relative z-10 px-4 pt-4 pb-6">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="text-white/70 text-xs font-medium">Selamat datang di</p>
          <h1 className="text-white font-extrabold text-xl md:text-2xl tracking-tight">
            Toko Bang Shin ⚡
          </h1>
        </motion.div>

        {/* Balance-style Card (glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-4 mb-5"
        >
          <p className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1">
            Total Koleksi Tersedia
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-white font-extrabold text-3xl md:text-4xl tracking-tight">
              {totalProducts}
            </span>
            <span className="text-white/60 text-sm font-semibold">produk</span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <span className="flex items-center gap-1 text-white/80 text-xs font-medium bg-white/10 px-2.5 py-1 rounded-full">
              <Sword className="w-3.5 h-3.5" /> {allSwords.length} Swords
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs font-medium bg-white/10 px-2.5 py-1 rounded-full">
              <Swords className="w-3.5 h-3.5" /> {allMelee.length} Melee
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs font-medium bg-white/10 px-2.5 py-1 rounded-full">
              <Package className="w-3.5 h-3.5" /> {allItems.length} Items
            </span>
          </div>
        </motion.div>

        {/* Quick Action Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-5 gap-2"
        >
          {quickActions.map((action, i) => (
            <button
              key={action.label}
              onClick={() => onActionSelect && onActionSelect(action.id)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-200`}>
                <action.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-white/90 text-[10px] md:text-xs font-semibold">{action.label}</span>
            </button>
          ))}

          {/* Scan QR Button */}
          <button
            onClick={onScanClick}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/30 group-active:scale-95 transition-all duration-200">
              <ScanLine className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-white/90 text-[10px] md:text-xs font-semibold">Scan QR</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="h-5 bg-background rounded-t-[1.5rem] relative z-10" />
    </section>
  );
};

export default HeroSection;
