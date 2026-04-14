import { motion } from "framer-motion";

const testimonials = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
  { id: 6, image: "" },
  { id: 7, image: "" },
  { id: 8, image: "" },
];

const TestimonialMarquee = () => {
  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mb-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-foreground text-center">
          ⭐ Testimoni Pelanggan
        </h2>
        <p className="text-sm text-muted-foreground text-center mt-1">
          Bukti transaksi dari pelanggan kami
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee">
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex-shrink-0 w-56 md:w-72 h-36 md:h-44 rounded-xl overflow-hidden border border-border shadow-card bg-card"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`Testimoni ${item.id}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-accent to-primary/10 text-muted-foreground">
                  <span className="text-3xl mb-2">📸</span>
                  <span className="text-[10px] font-medium">
                    Testimoni {item.id}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
