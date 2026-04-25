import { motion } from "framer-motion";
import { Gamepad2, Sprout, Sword } from "lucide-react";

const games = [
  {
    id: "sailor-piece",
    name: "Sailor Piece",
    description: "Item, Sword, & Melee lengkap untuk Sailor Piece",
    icon: Sword,
    image: "/promo.png", // Or any relevant image
    popular: true,
    active: true,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "grow-a-garden",
    name: "Grow A Garden",
    description: "Benih, Tools, dan item pertanian lainnya",
    icon: Sprout,
    image: "/promo.png", // fallback
    popular: false,
    active: false,
    color: "from-emerald-500 to-green-700",
  }
];

interface GameSelectionProps {
  onSelect?: (gameId: string) => void;
}

const GameSelection = ({ onSelect }: GameSelectionProps) => {
  return (
    <section className="pt-4 pb-6 px-4 mb-2">
      <div className="container px-0">
        <h2 className="font-extrabold text-foreground text-lg mb-4 flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[hsl(205,87%,49%)]" />
          Pilih Game
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="h-full"
            >
              <button
                onClick={game.active ? () => onSelect && onSelect(game.id) : undefined}
                className={`relative w-full h-full flex flex-col text-left rounded-2xl p-3 md:p-4 overflow-hidden shadow-md transition-all duration-300 ${
                  game.active 
                    ? "bg-gradient-to-br " + game.color + " hover:shadow-lg hover:scale-[1.02] cursor-pointer ring-2 ring-white/50" 
                    : "bg-muted cursor-not-allowed border border-border/50 opacity-80"
                }`}
              >
                {/* Background Decor */}
                {game.active && (
                  <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
                    <game.icon className="w-24 h-24 text-white" />
                  </div>
                )}

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between xl:justify-start xl:gap-2 mb-2">
                    <span className="p-1.5 md:p-2 rounded-xl bg-white/20 backdrop-blur-md shadow-sm border border-white/20">
                      <game.icon className={`w-4 h-4 md:w-5 md:h-5 ${game.active ? 'text-white' : 'text-muted-foreground'}`} />
                    </span>
                    
                    {game.popular && (
                      <span className="text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg shadow-sm animate-pulse">
                        🔥 HOT
                      </span>
                    )}
                    
                    {!game.active && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 bg-background text-muted-foreground rounded-md border border-border/50">
                        C. SOON
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className={`font-black text-sm md:text-base tracking-tight ${game.active ? 'text-white' : 'text-foreground/70'} leading-tight`}>
                      {game.name}
                    </h3>
                    <p className={`text-[10px] md:text-xs mt-1 md:mt-2 line-clamp-2 ${game.active ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {game.description}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSelection;
