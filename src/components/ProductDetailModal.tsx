import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Gem,
  Coins,
  Wrench,
  MapPin,
  Shield,
  Crown,
  Users,
  ShoppingCart,
  ExternalLink,
  ChevronDown,
  Tag,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductBundle } from "@/data/products";

const WHATSAPP_NUMBER = "6283841580448";

interface Props {
  product: ProductBundle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailModal = ({ product, open, onOpenChange }: Props) => {
  const [imgError, setImgError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Reset states if product changes
  useEffect(() => {
    setImgError(false);
    setIsCopied(false);
  }, [product]);

  if (!product) return null;

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
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Image header */}
        <div className="relative w-full h-56 md:h-72 bg-gradient-to-br from-primary/20 via-accent to-primary/10 overflow-hidden">
          {!imgError ? (
            <img
              src={imageUrl}
              alt={product.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl drop-shadow-lg animate-pulse">
                {product.emoji}
              </span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        </div>

        <div className="p-6 space-y-5">
          <DialogHeader>
            <div className="flex justify-between items-start gap-4">
              <div>
                <DialogTitle className="text-2xl font-extrabold flex items-center gap-3">
                  <span className="text-3xl">{product.emoji}</span>
                  {product.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground mt-1">
                  {product.subtitle}
                </DialogDescription>
              </div>
              {product.price && (
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold opacity-80">Harga Paket</span>
                  <span className="text-lg font-black tracking-tight">{product.price}</span>
                </div>
              )}
            </div>
          </DialogHeader>

          <div className="flex flex-wrap gap-2">
            {product.price && (
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-bold bg-blue-50 rounded-lg px-3 py-1.5 border border-blue-100">
                <Tag className="w-4 h-4" />
                {product.price}
              </span>
            )}
            {product.gems != null && product.gems > 0 && (
              <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold bg-accent rounded-lg px-3 py-1.5">
                <Gem className="w-4 h-4" />
                {product.gems.toLocaleString()} Gems
              </span>
            )}
            {product.cash && (
              <span className="inline-flex items-center gap-1.5 text-sm text-accent-foreground font-semibold bg-accent rounded-lg px-3 py-1.5">
                <Coins className="w-4 h-4" />
                {product.cash} Money
              </span>
            )}
          </div>



          {/* Requirements */}
          {(product.titleRequired ||
            product.raceRequired ||
            product.clanRequired ||
            product.prerequisite) && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
              <h4 className="text-sm font-bold text-amber-800 flex items-center gap-2">
                ⚠️ Syarat
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.titleRequired && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 border border-amber-300 rounded-lg px-2.5 py-1">
                    <Crown className="w-3 h-3" />
                    Title: {product.titleRequired}
                  </span>
                )}
                {product.raceRequired && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-lg px-2.5 py-1">
                    <Shield className="w-3 h-3" />
                    Ras: {product.raceRequired}
                  </span>
                )}
                {product.clanRequired && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 border border-green-300 rounded-lg px-2.5 py-1">
                    <Users className="w-3 h-3" />
                    Clan: {product.clanRequired}
                  </span>
                )}
                {product.prerequisite && (
                  <span className="text-xs font-medium text-orange-700 bg-orange-100 border border-orange-300 rounded-lg px-2.5 py-1">
                    ⚠️ Butuh: {product.prerequisite}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* How to get */}
          {product.howToGet && (
            <div className="bg-muted/50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-1">
                📍 Cara Mendapatkan
              </h4>
              <p className="text-sm text-muted-foreground">
                {product.howToGet}
              </p>
            </div>
          )}

          {/* Notes */}
          {product.notes && (
            <div className="bg-muted/50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-1">
                📝 Catatan
              </h4>
              <p className="text-sm text-muted-foreground">{product.notes}</p>
            </div>
          )}

          {/* Materials */}
          {product.materials.length > 0 && (
            <div className="bg-muted/50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                🧪 Material Utama
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <span
                    key={m.name}
                    className="text-sm bg-card border border-border rounded-lg px-3 py-1.5 font-medium"
                  >
                    {m.qty}x {m.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Extra Materials */}
          {product.extraMaterials?.map((extra) => (
            <div key={extra.label} className="bg-muted/50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-3">
                📦 {extra.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {extra.items.map((m) => (
                  <span
                    key={m.name}
                    className="text-sm bg-card border border-border rounded-lg px-3 py-1.5 font-medium"
                  >
                    {m.qty}x {m.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* F Skill Materials */}
          {product.fSkill && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <h4 className="text-sm font-bold text-orange-800 mb-3 flex items-center gap-2">
                🔥 Unlock F Move
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.fSkill.materials.map((m) => (
                  <span
                    key={m.name}
                    className="text-sm bg-white border border-orange-200 text-orange-700 rounded-lg px-3 py-1.5 font-bold"
                  >
                    {m.qty}x {m.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quest Requirements */}
          {product.questReqs && product.questReqs.length > 0 && (
            <div className="bg-muted/50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-3">
                📋 Syarat Quest
              </h4>
              <ul className="space-y-1.5">
                {product.questReqs.map((q) => (
                  <li
                    key={q}
                    className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Joki Addons */}
          {product.jokiAddons && product.jokiAddons.length > 0 && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                Add-on Joki
              </h4>
              <ul className="space-y-1.5">
                {product.jokiAddons.map((addon) => (
                  <li
                    key={addon}
                    className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {addon}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* BUY BUTTON */}
          <div className="pt-2">
            <Button
              size="lg"
              onClick={handleBuy}
              disabled={isCopied}
              className={cn(
                "w-full text-base font-bold gap-2 shadow-lg transition-all duration-300 h-14 rounded-xl",
                isCopied 
                  ? "bg-green-500 hover:bg-green-600 text-white" 
                  : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white hover:shadow-xl"
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
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Klik untuk buka WhatsApp & kirim format order otomatis
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
