import { X, ExternalLink, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QRScanModalProps {
  open: boolean;
  onClose: () => void;
}

const QRScanModal = ({ open, onClose }: QRScanModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-dana" />

          {/* Decorative circles */}
          <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full glass hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <h2 className="text-white font-bold text-lg">Scan QR Code</h2>
            <div className="w-10" /> {/* spacer */}
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 -mt-8">
            {/* QR Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-white/10 rounded-[2rem] blur-xl" />

              {/* QR Container */}
              <div className="relative bg-white rounded-3xl p-5 shadow-2xl">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[hsl(205,87%,49%)] rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[hsl(205,87%,49%)] rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[hsl(205,87%,49%)] rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[hsl(205,87%,49%)] rounded-br-3xl" />

                {/* Scanning line */}
                <div className="absolute left-5 right-5 h-1 bg-gradient-to-r from-transparent via-[hsl(205,87%,49%)] to-transparent rounded-full animate-scan-line z-10 opacity-60" />

                {/* QR Code Image */}
                <div className="w-56 h-56 md:w-64 md:h-64 relative overflow-hidden rounded-xl">
                  <img
                    src="/qr-code.jpeg"
                    alt="QR Code Toko Bang Shin"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if no QR image yet
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                          <span class="text-6xl mb-3">📱</span>
                          <p class="text-sm text-gray-500 font-semibold text-center px-4">QR Code akan ditampilkan di sini</p>
                          <p class="text-xs text-gray-400 mt-1">Taruh gambar di /public/qr-code.jpeg</p>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Info text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-sm text-center mt-6 max-w-xs"
            >
              Scan QR code di atas untuk mengakses info Toko Bang Shin
            </motion.p>

            {/* Glass info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass rounded-2xl p-4 w-full max-w-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Hubungi Admin</p>
                  <p className="text-white/60 text-xs">Via WhatsApp untuk order cepat</p>
                </div>
              </div>
              <button
                onClick={() => window.open("https://wa.me/6283841580448?text=Halo%20Admin%20Mimi!", "_blank")}
                className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Buka WhatsApp
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRScanModal;
