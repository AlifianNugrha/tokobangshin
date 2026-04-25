import { useState } from "react";
import { X, ShoppingCart, Copy, Check, ExternalLink, Package, Tag, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProductBundle } from "@/data/products";

const WHATSAPP_NUMBER = "6283841580448";

interface CheckoutModalProps {
  product: ProductBundle | null;
  open: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ product, open, onClose }: CheckoutModalProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [step, setStep] = useState<"review" | "payment" | "success">("review");

  if (!product) return null;

  const categoryName =
    product.category === "sword" ? "Sword" :
    product.category === "melee" ? "Melee" :
    "Item/Material";

  const folderName = product.category === "melee" ? "mele" : product.category;
  const imageUrl = product.image || `/${folderName}/${product.id}.jpg`;

  const generateOrderMessage = (isPaid: boolean) => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = today.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const orderId = `TBS-${today.getTime().toString().slice(-6)}`;

    let msg = `*INVOICE PESANAN - TOKO BANG SHIN*\n` +
      `============================\n\n` +
      `🆔 *No. Order:* #${orderId}\n` +
      `📅 *Tanggal:* ${dateStr} | ${timeStr}\n\n` +
      `----------------------------\n` +
      `🛍️ *Produk:* ${product.name}\n` +
      `📂 *Kategori:* ${categoryName}\n` +
      `💰 *Harga:* ${product.price || "Tanya Admin"}\n` +
      (product.fSkill ? `✨ *F-Move:* Included ✅\n` : "") +
      `----------------------------\n` +
      `📋 *Total Bayar:* *${product.price || "Tanya Admin"}*\n` +
      `============================\n\n`;
      
    if (isPaid) {
      msg += `✅ *STATUS: SUDAH TRANSFER*\n` +
        `_(Bukti transfer dilampirkan di bawah ini)_\n\n`;
    } else {
      msg += `⏳ *STATUS: MENUNGGU PEMBAYARAN*\n` +
        `_(Saya ingin konfirmasi pesanan ini min!)_\n\n`;
    }
    
    msg += `Mohon bantuannya ya Admin Mimi! 🙏✨\n` +
      `_Terima kasih sudah jajan di Toko Bang Shin!_`;
    return msg;
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderMessage(false));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSendWhatsApp = (isPaid: boolean) => {
    const message = generateOrderMessage(isPaid);
    navigator.clipboard.writeText(message);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClose = () => {
    setStep("review");
    setIsCopied(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end md:items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal — slides up on mobile */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-md max-h-[92vh] bg-background rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/50">
              <h2 className="font-extrabold text-lg text-foreground flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[hsl(205,87%,49%)]" />
                {step === "review" ? "Rincian Pesanan" : step === "payment" ? "Pembayaran" : "Terima Kasih"}
              </h2>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {step === "review" ? (
                <>
                  {/* Product Preview Card */}
                  <div className="glass-card rounded-2xl p-3 flex gap-3">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex-shrink-0">
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-foreground line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{product.subtitle}</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[hsl(205,87%,49%)]/10 text-[hsl(205,87%,49%)]">
                          {categoryName}
                        </span>
                        {product.fSkill && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600">
                            + F Move
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="px-4 py-3 bg-[hsl(205,87%,49%)]/5 border-b border-border/30">
                      <h4 className="text-xs font-bold text-[hsl(205,87%,49%)] uppercase tracking-wider flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5" />
                        Detail Pesanan
                      </h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Produk</span>
                        <span className="text-xs font-semibold text-foreground text-right max-w-[60%] line-clamp-1">{product.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Kategori</span>
                        <span className="text-xs font-semibold text-foreground">{categoryName}</span>
                      </div>
                      {product.price && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Harga</span>
                          <span className="text-sm font-extrabold text-[hsl(205,87%,49%)] flex items-center gap-1">
                            <Tag className="w-3.5 h-3.5" />
                            {product.price}
                          </span>
                        </div>
                      )}
                      {product.fSkill && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">F Move</span>
                          <span className="text-xs font-semibold text-orange-600">✅ Termasuk</span>
                        </div>
                      )}
                      {product.gems && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Gems Needed</span>
                          <span className="text-xs font-semibold text-foreground">{product.gems.toLocaleString()} 💎</span>
                        </div>
                      )}
                      {product.cash && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">In-game Cash</span>
                          <span className="text-xs font-semibold text-foreground">{product.cash}</span>
                        </div>
                      )}
                      {product.titleRequired && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Title Required</span>
                          <span className="text-xs font-semibold text-amber-600">🏅 {product.titleRequired}</span>
                        </div>
                      )}
                      {product.raceRequired && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Race Required</span>
                          <span className="text-xs font-semibold text-purple-600">🧬 {product.raceRequired}</span>
                        </div>
                      )}
                      {product.clanRequired && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Clan Required</span>
                          <span className="text-xs font-semibold text-red-600">⚔️ {product.clanRequired}</span>
                        </div>
                      )}

                      {/* Divider */}
                      <div className="h-px bg-border/50 my-1" />

                      {/* Materials */}
                      {product.materials.length > 0 && (
                        <div>
                          <p className="text-xs font-bold text-foreground mb-1.5">📋 Material yang Dibutuhkan:</p>
                          <div className="space-y-1">
                            {product.materials.map((m, i) => (
                              <div key={i} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{m.name}</span>
                                <span className="font-semibold text-foreground">{m.qty}x</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Total */}
                      {product.price && (
                        <>
                          <div className="h-px bg-[hsl(205,87%,49%)]/20 my-1" />
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-sm font-bold text-foreground">Total Bayar</span>
                            <span className="text-lg font-extrabold text-[hsl(205,87%,49%)]">
                              {product.price}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Notes */}
                  {product.notes && (
                    <div className="glass-blue rounded-xl p-3">
                      <p className="text-xs text-[hsl(205,87%,49%)] font-medium">
                        💡 {product.notes}
                      </p>
                    </div>
                  )}
                </>
              ) : step === "payment" ? (
                /* ===== PAYMENT STEP ===== */
                <>
                  {/* Price summary */}
                  <div className="text-center py-2">
                    <p className="text-xs text-muted-foreground font-medium">Total Pembayaran</p>
                    <p className="text-3xl font-extrabold text-[hsl(205,87%,49%)] mt-1">
                      {product.price || "Tanya Admin"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{product.name}</p>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-border/30">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-[hsl(205,87%,49%)] rounded-tl-2xl" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-[hsl(205,87%,49%)] rounded-tr-2xl" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-[hsl(205,87%,49%)] rounded-bl-2xl" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-[hsl(205,87%,49%)] rounded-br-2xl" />

                      <img
                        src="/qr-code.jpeg"
                        alt="QR Code Pembayaran"
                        className="w-48 h-48 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML += `
                            <div class="w-48 h-48 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                              <span class="text-5xl mb-2">📱</span>
                              <p class="text-xs text-gray-500 font-semibold text-center px-4">QR belum tersedia</p>
                              <p class="text-[10px] text-gray-400 mt-1">Hubungi Admin via WA</p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>

                  <p className="text-center text-xs text-muted-foreground mt-2">
                    Scan QR di atas untuk pembayaran, lalu konfirmasi via WhatsApp
                  </p>

                  {/* Order summary mini */}
                  <div className="glass-card rounded-xl p-3 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Produk</span>
                      <span className="font-semibold text-foreground line-clamp-1 max-w-[60%] text-right">{product.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Kategori</span>
                      <span className="font-semibold">{categoryName}</span>
                    </div>
                    {product.price && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Harga</span>
                        <span className="font-bold text-[hsl(205,87%,49%)]">{product.price}</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* ===== SUCCESS STEP ===== */
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-green-500/20 animate-bounce">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mt-4">Yeay! Pesanan Disiapkan</h3>
                  <p className="text-sm text-center text-muted-foreground px-4">
                    Terima kasih telah berbelanja. Klik tombol di bawah untuk mengirimkan bukti transfer dan format order kamu ke admin via WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="px-5 py-4 border-t border-border/30 space-y-2.5 bg-background">
              {step === "review" ? (
                <>
                  {/* Copy Order */}
                  <button
                    onClick={handleCopyOrder}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all",
                      isCopied
                        ? "bg-green-500 text-white"
                        : "glass-blue text-[hsl(205,87%,49%)] hover:bg-[hsl(205,87%,49%)]/20"
                    )}
                  >
                    {isCopied ? (
                      <><Check className="w-4 h-4" /> Teks Pesanan Disalin!</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Salin Detail Pesanan</>
                    )}
                  </button>

                  {/* Proceed to Payment */}
                  <button
                    onClick={() => setStep("payment")}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[hsl(205,87%,49%)] to-[hsl(215,85%,38%)] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Sparkles className="w-4 h-4" />
                    Lanjut ke Pembayaran
                  </button>
                </>
              ) : step === "payment" ? (
                <>
                  {/* Back button */}
                  <button
                    onClick={() => setStep("review")}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl glass-blue text-[hsl(205,87%,49%)] text-sm font-bold hover:bg-[hsl(205,87%,49%)]/20 transition-all"
                  >
                    ← Kembali ke Rincian
                  </button>

                  {/* Confirm Payment -> Success */}
                  <div className="space-y-2.5">
                    <button
                      onClick={() => setStep("success")}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[hsl(205,87%,49%)] hover:bg-[hsl(205,87%,44%)] text-white text-sm font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Check className="w-4 h-4" />
                      Saya Sudah Transfer
                    </button>

                    <button
                      onClick={() => handleSendWhatsApp(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 text-muted-foreground hover:text-foreground text-xs md:text-sm font-bold transition-all"
                    >
                      Masih Bingung / Tanya Admin Aja
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Whatsapp Button in Success Step */}
                  <button
                    onClick={() => handleSendWhatsApp(true)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] animate-pulse"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Kirim Orderan & Bukti ke WA
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
