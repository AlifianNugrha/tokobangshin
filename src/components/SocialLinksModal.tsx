import { X, ExternalLink, Phone, Video, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialLinksModalProps {
  open: boolean;
  onClose: () => void;
}

const SocialLinksModal = ({ open, onClose }: SocialLinksModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal — slides up on mobile */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-md bg-background rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
              <h2 className="font-extrabold text-lg text-foreground flex items-center gap-2">
                Hubungi Kami
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Pilih platform untuk menghubungi admin atau melihat konten terbaru Toko Bang Shin!
              </p>

              {/* WhatsApp Button */}
              <button
                onClick={() => window.open("https://wa.me/6283841580448?text=Halo%20Admin%20Mimi,%20saya%20mau%20tanya%20tentang%20Toko%20Bang%20Shin!", "_blank")}
                className="w-full relative overflow-hidden group rounded-2xl glass-card flex items-center p-4 transition-all hover:shadow-lg hover:-translate-y-1 border border-green-500/30 hover:border-green-500/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 z-10">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 text-left z-10">
                  <h3 className="font-bold text-foreground text-base">WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Order & Tanya Admin</p>
                </div>
                <ExternalLink className="w-5 h-5 text-green-500 ml-auto opacity-50 group-hover:opacity-100 transition-opacity z-10" />
              </button>

              {/* TikTok Button */}
              <button
                onClick={() => window.open("https://www.tiktok.com/@shinhouo?_r=1&_t=ZS-95kRRLusoiq", "_blank")}
                className="w-full relative overflow-hidden group rounded-2xl glass-card flex items-center p-4 transition-all hover:shadow-lg hover:-translate-y-1 border border-black/10 hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 z-10">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 text-left z-10">
                  <h3 className="font-bold text-foreground text-base">TikTok</h3>
                  <p className="text-xs text-muted-foreground">Konten & Review Showcase</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-800 ml-auto opacity-50 group-hover:opacity-100 transition-opacity z-10" />
              </button>

              {/* YouTube Button */}
              <button
                onClick={() => window.open("https://youtube.com/@shinhouoofficial?si=8LSC7upzFlJVyQxt", "_blank")}
                className="w-full relative overflow-hidden group rounded-2xl glass-card flex items-center p-4 transition-all hover:shadow-lg hover:-translate-y-1 border border-red-500/30 hover:border-red-500/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 z-10">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 text-left z-10">
                  <h3 className="font-bold text-foreground text-base">YouTube</h3>
                  <p className="text-xs text-muted-foreground">Video Lengkap Toko Bang Shin</p>
                </div>
                <ExternalLink className="w-5 h-5 text-red-600 ml-auto opacity-50 group-hover:opacity-100 transition-opacity z-10" />
              </button>
            </div>
            
            {/* Safe area spacer for mobile */}
            <div className="h-6 md:h-0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinksModal;
