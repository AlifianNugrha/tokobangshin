import { motion } from "framer-motion";
import { Sword, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex items-end justify-center overflow-hidden gradient-hero min-h-[50vh] md:min-h-[600px] pb-12 md:pb-24 pt-20">
      {/* Hero background image */}
      <img
        src="/HERO.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center py-10"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
